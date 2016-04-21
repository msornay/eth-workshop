# eth-workshop

## SETUP

Packages to run Mist : libnotify4 libgconf2-4

## CHEATSHEET

* Create account : `personal.newAccount("passphrase")`
* Accounts list : `eth.accounts`
* Block number : `eth.blockNumber`
* `miner.start(1)` / `miner.stop()`
* `ethlove.links(eth.account[0])`

## Loose planning

* Start a node on a private testnet :

    `geth --identity "<ID>" --genesis <GENESIS.JSON> --rpc --rpcport "8080" --rpccorsdomain "*" --datadir "<DATADIR>" --ipcpath "~/.ethereum/geth.ipc" --port "30303" --nodiscover --rpcapi "db,eth,net,web3" --networkid 9891 --verbosity 6 console 2>> geth.log`

* Add to shared doc :

    `enode://<NODE_ID>@<YOUR_IP>:30303`

    To know your nodeID : `admin.nodeInfo.id` in console

* Build your <DATADIR>/static-nodes.json with every other enode & restart geth :

    https://github.com/ethereum/go-ethereum/wiki/Connecting-to-the-network#static-nodes

* Start Mist