# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index => '/products' GET
- Show => '/products/:id' GET
- Create => '/products' POST

#### Users

- Index => '/users' GET
- Show => '/users/:id' GET
- Create => '/users' POST

#### Orders

- Current Order by user => '/orders/:id' GET
- Index => '/orders' GET

## Data Shapes

#### Product

- id
- name
- price
  Table: Product (id:serial primary key , name:varchar(50), price:integer)

#### User

- id
- firstname
- lastname
- password
  Table: User (id:serial primary key , firstName:varchar(50), lastName:varchar(50), password:varchar(60))

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
  Table: Orders (id:serial primary key , product_id:string(foreign key to products table), quantity:integer[default 1], user_id:string(foreign key to users table), status:string)
