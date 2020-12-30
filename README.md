# yest

```bash
git clone git@github.com:pmiks/yest.git
cd yest
yarn install
```

## Develop

- Run `docker-compose up -d` to start the PostgreSQL database

  - the PostgreSQL service available on <http://localhost:5432>
  - open <http://localhost:5433> for PostgreSQL Web UI

### Develop Web App

- Run `yarn workspace @yest/web build` to build common package
- Run `yarn workspace @yest/web build` to build common package
- Run `yarn workspace @tr/common start:dev` to build common 
