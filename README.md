# :clipboard: Catho/SEEK Job Ads Checkout

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Logo-catho.png">
</p>

Catho/SEEK Job Ads Checkout was built using Adonis.JS (Node.JS) and PostgreSQL with Docker.

## Requisitos

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## How to run it ?

1. `git clone https://github.com/giovannicruz97/seek-job-ads-checkout.git`
2. `cd /seek-job-ads-checkout`
3. Create a `.env` file inside project's root, following `.env.example` as example. .
4. `docker-compose up -d`
5. Create and populate database with initial data: `docker exec seek-job-ads-checkout adonis migration:refresh --seed`
6. In your browser, go to: `http://localhost:3333`
7. To access container's bash, execute: `docker exec -it seek-job-ads-checkout bash`
8. To stop the containers, execute: `docker-compose stop`

## Tests

- `docker exec seek-job-ads-checkout-app npm test`

## Tables (PostgreSQL)

**Customers**

```
{
  id: int,
  name: string,
}
```

**Products**

```
{
  id: string,
  name: string,
  price: decimal(10,2)
}
```

**Discounts**

```
{
  id: int,
  product_id: string,
  customer_id: int,
  minimum_products: int,
  price_drop: decimal(10,2)
}
```

**Deals**

```
{
  id: int,
  product_id: string,
  customer_id: int,
  gets: int,
  for: int
}
```

## Contact

- Email: giovanni.cruz97@hotmail.com
