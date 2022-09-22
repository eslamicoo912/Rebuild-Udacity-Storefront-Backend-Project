/* Replace with your SQL commands */
CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    productid INTEGER NOT NULL,
    quantity INTEGER,
    userid INTEGER NOT NULL,
    status VARCHAR(64)
)