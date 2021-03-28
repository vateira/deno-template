
.PHONY: run
run:
	docker run -p 8000:8000 --net=db_db_network --detach serverapp:latest

.PHONY: image
image: executable
	@docker build \
		--tag=serverapp:latest \
		--platform=linux/amd64 \
		.

.PHONY: executable
executable: clean
	@mkdir -p bin
	@deno compile \
		--unstable \
		--importmap=../import_map.json \
		--target=x86_64-unknown-linux-gnu \
		--allow-net \
		--allow-env \
		--output=bin/server \
		./main.ts 

.PHONY: clean
clean:
	@rm -rf ./bin/*
	@docker 
