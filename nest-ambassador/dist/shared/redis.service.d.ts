import { RedisClient } from 'redis';
import { Cache } from 'cache-manager';
export declare class RedisService {
    private cacheManager;
    constructor(cacheManager: Cache);
    getClient(): RedisClient;
}
