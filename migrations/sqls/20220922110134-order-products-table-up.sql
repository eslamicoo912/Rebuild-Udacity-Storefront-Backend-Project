/* Replace with your SQL commands */
CREATE TABLE order_products(
    id SERIAL PRIMARY KEY,
    quantity INTEGER,
    orderId BIGINT REFERENCES orders(id),
    productId BIGINT REFERENCES products(id)
)