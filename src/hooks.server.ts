import { featureTogglesHandler } from './featureToggles';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(featureTogglesHandler);
