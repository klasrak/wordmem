CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS words (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  userId uuid NOT NULL,
  email VARCHAR NOT NULL,
  word VARCHAR NOT NULL,
  ref_url VARCHAR NOT NULL DEFAULT '',
  email_reminder BOOLEAN DEFAULT FALSE,
  start_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);