// Fantasy Proxy APIs

import { cache } from './future';
import { createResource } from 'simple-cache-provider';

// https://twitter.com/motiz88/status/969887136588746762
export function createAutoFetcher(fetch) {
    const res = createResource(fetch);
    return new Proxy(res, {
        get(target, key) {
            return target(cache, key);
        }
    });
}
