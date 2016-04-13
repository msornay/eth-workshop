# eth-workshop

- `docker pull ethereum/client-go`

/opt/docker-latest run -it -p 8545:8545 -p 30303:30303 eth-workshop --rpc --rpcaddr "127.0.0.1" --networkid  25 --datadir /tmp/eth --genesis /etc/genesis.json
