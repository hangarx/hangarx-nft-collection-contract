# hangarx-collection-smart-contract

![HangarX](https://avatars.githubusercontent.com/u/171933940?v=4 "HangarX")

- Homepage : https://hangarx.io
- Portal Gaming : https://portal.hangarx.io
- Discord: https://discord.gg/3ruA9fBNpf
- Twitter/X: https://x.com/Hangarxio
- Telegram Channel: https://t.me/hangarxgam
- Telegram chat: https://t.me/hangarxg
- Youtube: https://www.youtube.com/channel/UCYzeAKn98uA7HfFhK7Zig3w

# Features 💎

- 💎 Deploy NFT Collection
- 💎 Deploy NFT
- 💎 Read NFT | NFT Collection
- 💎 Transfer NFT

- **NOTE** : Please check env. file

## Project structure

-   `contracts` - source code of all the smart contracts of the project and their dependencies.
-   `wrappers` - wrapper classes (implementing `Contract` from ton-core) for the contracts, including any [de]serialization primitives and compilation functions.
-   `tests` - tests for the contracts.
-   `scripts` - scripts used by the project, mainly the deployment scripts.

## How to use

### Build

`npx blueprint build` or `yarn blueprint build`

### Test

`npx blueprint test` or `yarn blueprint test`

### Deploy or run another script

`npx blueprint run` or `yarn blueprint run`

### Add a new contract

`npx blueprint create ContractName` or `yarn blueprint create ContractName`
