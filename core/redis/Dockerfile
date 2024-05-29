FROM redis

COPY ./redis.conf /data/usr/local/etc/redis/redis.conf

EXPOSE 6379

CMD ["redis-server", "/data/usr/local/etc/redis/redis.conf"]