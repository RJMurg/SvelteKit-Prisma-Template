import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		coverage: {
			reporter: ['json-summary'],
			reportOnFailure: true
		}
	}
});
