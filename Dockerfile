# Step 1: Start stage
FROM node:22-alpine AS start
WORKDIR /app
COPY . .
RUN npm ci

# Step 2: Build stage
FROM node:22-alpine AS build
WORKDIR /app
COPY --from=start /app .
RUN npm run build

# Step 3: Run stage
FROM node:22-alpine AS run
WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/start.sh .
RUN chmod +x ./start.sh

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --start-interval=5s \
    CMD ["sh", "-c", "wget -q --spider http://127.0.0.1:3000/ || exit 1"]

CMD ["./start.sh"]