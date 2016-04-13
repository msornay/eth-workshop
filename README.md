# eth-workshop

./build/bin/geth --identity "<ID>" --genesis ../eth-workshop/genesis.json --rpc --rpcport "8080" --rpccorsdomain "*" --datadir "<DATADIR>" --ipcpath "~/.ethereum/geth.ipc" --port "30303" --nodiscover --rpcapi "db,eth,net,web3" --networkid 9891 --verbosity 6 console 2>> geth.log
