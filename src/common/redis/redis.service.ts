import { Injectable, Logger } from '@nestjs/common';
import { Redis } from 'ioredis';
import { InjectRedis } from '@liaoliaots/nestjs-redis';

@Injectable()
export class RedisService {
  private readonly logger = new Logger(RedisService.name);

  constructor(@InjectRedis() private readonly redis: Redis) {}

  /**
   * Set a key-value pair in Redis with optional TTL
   */
  async set(key: string, value: string, ttl?: number): Promise<void> {
    try {
      if (ttl) {
        await this.redis.set(key, value, 'EX', ttl); // Set key with expiration
      } else {
        await this.redis.set(key, value); // Set key without expiration
      }
      this.logger.log(`Key set in Redis: ${key}`);
    } catch (error) {
      this.logger.error(`Failed to set key "${key}" in Redis: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get a value by key from Redis
   */
  async get(key: string): Promise<string | null> {
    try {
      const value = await this.redis.get(key);
      this.logger.log(`Key retrieved from Redis: ${key}`);
      return value;
    } catch (error) {
      this.logger.error(`Failed to get key "${key}" from Redis: ${error.message}`);
      throw error;
    }
  }

  /**
   * Delete a key from Redis
   */
  async del(key: string): Promise<void> {
    try {
      await this.redis.del(key);
      this.logger.log(`Key deleted from Redis: ${key}`);
    } catch (error) {
      this.logger.error(`Failed to delete key "${key}" from Redis: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get multiple values by keys
   */
  async mget(keys: string[]): Promise<(string | null)[]> {
    try {
      const values = await this.redis.mget(...keys);
      this.logger.log(`Keys retrieved from Redis: ${keys.join(', ')}`);
      return values;
    } catch (error) {
      this.logger.error(`Failed to get keys from Redis: ${error.message}`);
      throw error;
    }
  }

  /**
   * Delete multiple keys
   */
  async delByPattern(pattern: string): Promise<void> {
    try {
      const keys = await this.redis.keys(pattern); // Get keys matching the pattern
      if (keys.length > 0) {
        await this.redis.del(...keys);
        this.logger.log(`Keys deleted from Redis matching pattern: ${pattern}`);
      }
    } catch (error) {
      this.logger.error(`Failed to delete keys by pattern "${pattern}": ${error.message}`);
      throw error;
    }
  }
}
