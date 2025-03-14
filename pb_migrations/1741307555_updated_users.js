/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number1382998775",
    "max": null,
    "min": 0,
    "name": "totalBalance",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "number2677571450",
    "max": null,
    "min": 0,
    "name": "bonus",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "number2961731513",
    "max": null,
    "min": 0,
    "name": "activeInvestments",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "number2789576922",
    "max": null,
    "min": 0,
    "name": "accruedProfit",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "number737823308",
    "max": null,
    "min": 0,
    "name": "btc",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "number1041735753",
    "max": null,
    "min": 0,
    "name": "btcAmount",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "number3110569281",
    "max": null,
    "min": 0,
    "name": "eth",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "hidden": false,
    "id": "number1483839866",
    "max": null,
    "min": 0,
    "name": "ethAmount",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "hidden": false,
    "id": "number2112569917",
    "max": null,
    "min": 0,
    "name": "usdt",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "number1317885716",
    "max": null,
    "min": 0,
    "name": "usdtAmount",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(18, new Field({
    "hidden": false,
    "id": "number560228166",
    "max": null,
    "min": 0,
    "name": "ltc",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(19, new Field({
    "hidden": false,
    "id": "number4141186011",
    "max": null,
    "min": 0,
    "name": "ltcAmount",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(20, new Field({
    "hidden": false,
    "id": "number3973087233",
    "max": null,
    "min": 0,
    "name": "bnb",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(21, new Field({
    "hidden": false,
    "id": "number1964738078",
    "max": null,
    "min": 0,
    "name": "bnbAmount",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(22, new Field({
    "hidden": false,
    "id": "number4017028068",
    "max": null,
    "min": 0,
    "name": "trx",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(23, new Field({
    "hidden": false,
    "id": "number1115380225",
    "max": null,
    "min": 0,
    "name": "trxAmount",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(24, new Field({
    "hidden": false,
    "id": "number261575936",
    "max": null,
    "min": 0,
    "name": "sol",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(25, new Field({
    "hidden": false,
    "id": "number1379249135",
    "max": null,
    "min": 0,
    "name": "solAmount",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.fields.removeById("number1382998775")

  // remove field
  collection.fields.removeById("number2677571450")

  // remove field
  collection.fields.removeById("number2961731513")

  // remove field
  collection.fields.removeById("number2789576922")

  // remove field
  collection.fields.removeById("number737823308")

  // remove field
  collection.fields.removeById("number1041735753")

  // remove field
  collection.fields.removeById("number3110569281")

  // remove field
  collection.fields.removeById("number1483839866")

  // remove field
  collection.fields.removeById("number2112569917")

  // remove field
  collection.fields.removeById("number1317885716")

  // remove field
  collection.fields.removeById("number560228166")

  // remove field
  collection.fields.removeById("number4141186011")

  // remove field
  collection.fields.removeById("number3973087233")

  // remove field
  collection.fields.removeById("number1964738078")

  // remove field
  collection.fields.removeById("number4017028068")

  // remove field
  collection.fields.removeById("number1115380225")

  // remove field
  collection.fields.removeById("number261575936")

  // remove field
  collection.fields.removeById("number1379249135")

  return app.save(collection)
})
