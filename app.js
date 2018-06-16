const express = require('express')
const bitcoin = require('bitcoinjs-lib')

const app = express()

app.post('/', (req, res) => {
  if (!req.query) return res.sendStatus(400)

  let address = req.query.address
  let version = Number(req.query.version)
  let decodedAddress = bitcoin.address.fromBase58Check(address)

  let newAddress = bitcoin.address.toBase58Check(decodedAddress['hash'], version)
  res.send(newAddress)
})

app.listen(3002, () => {
  console.log('listening on port: 3002')
})
