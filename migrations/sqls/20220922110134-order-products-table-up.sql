/* Replace with your SQL commands */
CREATE TABLE order_products(
    id SERIAL PRIMARY KEY,
    quantity INTEGER,
    orderid BIGINT REFERENCES orders(id),
    productid BIGINT REFERENCES products(id)
)