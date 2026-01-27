import type { Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export interface FeatureFlags {}

export const featureTogglesHandler: Handle = async ({ event, resolve }) => {
	event.locals.flags = {};

	return resolve(event);
};
