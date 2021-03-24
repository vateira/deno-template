
-- +migrate Up

CREATE TABLE IF NOT EXISTS users (id int, name varchar(255));

-- +migrate Down

DROP TABLE IF EXISTS users;