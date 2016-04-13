# eth-workshop

* Start a node on a private testnet :

`geth --identity "<ID>" --genesis <GENESIS.JSON> --rpc --rpcport "8080" --rpccorsdomain "*" --datadir "<DATADIR>" --ipcpath "~/.ethereum/geth.ipc" --port "30303" --nodiscover --rpcapi "db,eth,net,web3" --networkid 9891 --verbosity 6 console 2>> geth.log`

* Add to shared doc :

`enode://<NODE_ID>@<YOUR_IP>:30303`

To know your nodeID : `admin.nodeInfo.id` in console

* Build your <DATADIR>/static-nodes.json with every other enode & restart geth