var web3 = new Web3();

async function Connect(){
    if ((typeof window.ethereum !== 'undefined')
    || (typeof window.web3 !== 'undefined')) {
        return new Web3(window['ethereum'] || window.web3.currentProvider)
    } else {
        // here you could use a different provider, maybe use an infura account
        return new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/..."))
}
}