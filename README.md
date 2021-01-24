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

### Develop Server App

- Run `yarn workspace @yest/server build` to build common package
- Run `yarn workspace @yest/server start` to start WEB common packag
### Develop Web App

- Run `yarn workspace @yest/web build` to build common package
- Run `yarn workspace @yest/web start` to start WEB common package
