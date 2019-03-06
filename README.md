# :clipboard: Catho/SEEK Job Ads Checkout

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Logo-catho.png">
</p>

Catho/SEEK Job Ads Checkout was built using Adonis.JS (Node.JS), Bootstrap 4 and PostgreSQL with Docker.

## Requisitos

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## How to run it ?

1. `git clone https://github.com/giovannicruz97/seek-job-ads-checkout.git`
2. `cd /seek-job-ads-checkout`
3. Create a `.env` file inside project's root, following `.env.example` as example. Execute: `cp .env.example .env`
4. `docker-compose up -d` (background) or `docker-compose up` (foreground)
5. Create and populate database with initial data: `docker exec seek-job-ads-checkout-app adonis migration:refresh --seed`
6. In your browser, go to: `http://localhost:3333` or `http://0.0.0.0:3333`
7. To access container's bash, execute: `docker exec -it seek-job-ads-checkout-app bash`
8. To stop the containers, execute: `docker-compose stop`

## Tests

- `docker exec seek-job-ads-checkout-app npm test`

## Tables (PostgreSQL)

**Customers**

```
{
  (PK) id: int,
  name: string,
}
```

**Products**

```
{
  (PK) id: string,
  name: string,
  price: decimal(10,2)
}
```

**Discounts**

```
{
  (PK) id: int,
  (FK -> products.id) product_id: string,
  (FK -> customers.id) customer_id: int,
  minimum_products: int,
  price_drop: decimal(10,2)
}
```

**Deals**

```
{
  (PK) id: int,
  (FK -> products.id) product_id: string,
  (FK -> customers.id) customer_id: int,
  gets: int,
  for: int
}
```

## Contact

- Email: giovanni.cruz97@hotmail.com
