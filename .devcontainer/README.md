# Migration from angular 11 -> 14

1. Change node version from 16 -> 14 in dev container
2. Execute `npm run start` to verify that the old one is working
3. Execute `npx nx migrate @nrwl/workspace` 
4. Execute `npm install --legacy-peer-deps`
5. Execute `npx nx migrate --run-migrations`
6. Execute `rm package-lock.json && rm -rf node_modules`