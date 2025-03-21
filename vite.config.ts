import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), enhancedImages()],

	test: {
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [svelteTesting()],

				test: {
					coverage: {
						reporter: ['json-summary'],
						reportOnFailure: true
					},
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['tests/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',

				test: {
					coverage: {
						reporter: ['json-summary'],
						reportOnFailure: true
					},
					name: 'server',
					environment: 'node',
					include: ['tests/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
