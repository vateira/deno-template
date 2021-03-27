FROM debian:bullseye-slim

WORKDIR /app
COPY ./bin/server /app/server
EXPOSE 8000
ENV STAGE=prod

CMD ["./server"]
