# Adonis.js E-commerce api Project
This is a simple e-commerce project built with Nuxt.js on the front-end and AdonisJS on the back-end. It consumes a product API and displays products in a grid, with create, edit, and delete functionalities.

## Technologies
- AdonisJS (Node.js framework)
- TypeScript
- PostgreSQL (database)

  ## Prerequisites
  Before starting, make sure you have Node.js (v14 or higher), npm installed and PostgreSQL installed.

 ## Project Setup

1) clone the repository, Navigate to the project directory: and istall dependecies
```bash
git clone https://github.com/GabrielLacerda000/e-commerce-api.git

cd your-backend-repository

npm install
```
 ## ENV

Copy the  `.env.example` to `.env` file in the root of the project and configure the necessary variables. Example:
```bash
DB_CONNECTION=pgsql
PG_HOST=127.0.0.1
PG_PORT=5432
PG_USER=your_db_user
PG_PASSWORD=your_db_password
PG_DB_NAME=your_db_name

```
Run the migrations:
```
node ace migration:run

```

## Commands to Run the Project
```bash
npm run dev --watch
```

## API Endpoints
| Method | Endpoint            | Description                  |
|--------|----------------------|------------------------------|
| GET    | `/products`         | Get all products             |
| GET    | `/products/:id`     | Get a product by ID          |
| POST   | `/products`         | Create a new product         |
| PUT    | `/products/:id`     | Update a product by ID       |
| DELETE | `/products/:id`     | Delete a product by ID       |

## How to Use
* List Products: Send a GET request to /products to retrieve a list of all products.

* Get Product Details: Send a GET request to /products/:id to retrieve details for a specific product.

* Create Product: Send a POST request to /products with a JSON body containing name, description, price, and stock.

* Edit Product: Send a PUT request to /products/:id with updated product details.

* Delete Product: Send a DELETE request to /products/:id to remove a product.

## Notes
* Ensure that the database server is running before starting the Adonis server.
* Handle API responses carefully in the front-end to manage success and error messages.
