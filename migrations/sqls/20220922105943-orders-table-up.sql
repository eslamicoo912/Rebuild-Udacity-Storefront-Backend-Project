/* Replace with your SQL commands */
CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    productId INTEGER NOT NULL,
    quantity INTEGER,
    userId INTEGER NOT NULL,
    status VARCHAR(64)
)