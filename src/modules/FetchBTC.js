const FetchBTC = {
  async init() {
    const btcResponse = await fetch('https://blockchain.info/ticker')
    const btcJSON = await btcResponse.json()

    this.renderBTC(btcJSON.BRL.sell)
  },
  renderBTC(price) {
    const btcPrice = document.querySelector('.btc-price')
    btcPrice.innerText = (1000 / price).toFixed(4)
  }
}

export default FetchBTC
