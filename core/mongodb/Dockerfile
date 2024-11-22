FROM mongo:6.0.11

EXPOSE 27017

COPY ./subsets /docker-entrypoint-initdb.d/

# RUN bash /subset/mongoexport.sh

# CMD ["bash", "/subset/mongoexport.sh"]