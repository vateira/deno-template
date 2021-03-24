migrateImage = fufuhu/sql-migrate 

.PHONY: up
up:
	docker-compose up -d

.PHONY: down
down:
	docker-compose down

.PHONY: migrate
migrate:
	@docker run \
		-v $(CURDIR)/migrate:/migrate \
		-w /migrate \
		$(migrateImage) \
		sh -c "sql-migrate new $(NAME)"

	
.PHONY: migrate-up
migrate-up:
	@docker run \
		-v $(CURDIR)/migrate:/migrate \
		-w /migrate \
		--network db_db_network \
		$(migrateImage) \
		sh -c "sql-migrate up"


.PHONY: migrate-down
migrate-down:
	@docker run \
		-v $(CURDIR)/migrate:/migrate \
		-w /migrate \
		--network db_db_network \
		$(migrateImage) \
		sh -c "sql-migrate down"
