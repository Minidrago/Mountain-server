const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const { default: axios } = require('axios');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const mountains = axios.create({
  baseURL: 'http://api.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice',
  params: { 
      api_key: 'Llk2zeP1Zkj6ug84JZ9hTWrlniSPhbADkmb492ayGdVZrWLh9tCdhMkaFttTtlt%2F1VTZ1gQZm%2Fg4wNaB4KIpEg%3D%3D',
      numOfRows: 200
  }
})

app.get('/', async function (req, res) {  
  let {msg} = req.query;
  let a = await mountains.get('/',{ params: { mntnNm:msg }})
  
  res.send( a.data.response.body.items.item );
})

app.listen(3000)