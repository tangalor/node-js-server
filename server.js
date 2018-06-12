// our dependencies
/*
const express = require('express');
const app = express();

// from top level path e.g. localhost:7777, this response will be sent
app.get('/', (request, response) => response.send('Hello World'));

// set the server to listen on port 7777
app.listen(7777, () => console.log('Listening on port 7777'));
*/

/*

https://blog.leonhassan.co.uk/2018/01/09/setting-up-a-simple-rest-server-in-node-js/

*/

const express = require('express');
const app = express();
const router = express.Router();
const port = 7777;

// for enable POST
// npm install body-parser --save
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// url: http://localhost:7777/
app.get('/', (request, response) => response.send('Hello World'));

// all routes prefixed with /api
app.use('/api', router);

// using router.get() to prefix our path
// url: http://localhost:7777/api/
router.get('/', (request, response) => {
  response.json({message: 'Hello, welcome to my server'});
});

router.get('/privacy/getPrivacyOmnibus', (request, response) => {
  response.json({
  "nome": "Marco",
  "cognome": "Ughetti",
  "codiceFiscale": "TNGLNZ83M10I726A",
  "dataNascita": "01/08/1982",
  "luogoNascita": "Firenze",
  "privacyCheck1": false,
  "privacyCheck2": false,
  "privacyCheck3": false
});
});

// new intestario.commercialPrivacyEnabled
// new intestatario.changePhoneRequest
/*
	  "commercialPrivacyEnabled": true,
	  "changePhoneRequest": true

*/
router.get('/polizza/datiPreventivo', (request, response) => {
  response.json({
  "datiCopertura": {
    "idPolizza": 0,
    "numeroPartecipanti": 0
  },
  "datiAnagrafici": {
    "idPolizza": 0,
    "intestatario": {
      "indirizzoResidenza": {
        "streetNumber": "47",
        "route": "Via Bernardino Verro",
        "locality": "Milano",
        "province": "MI",
        "region": "Lombardia",
        "country": "Italia",
        "postalCode": "20141",
        "latitude": 45.43,
        "longitude": 9.19,
        "displayAddress": "Via Bernardino Verro, 47, Milano 20141, MI, Italia - "
      },
      "indirizzoSpedizione": {
        "latitude": 0.00,
        "longitude": 0.00,
        "displayAddress": " - "
      },
      "email": "tangalor@gmail.com",
      "telefonoCellulare": "3387453376",
      "telefonoFisso": "",
      "nome": "Lorenzo",
      "cognome": "Tanganelli",
      "codiceFiscale": "TNGLNZ83M10I726A",
      "dataNascita": "1983-08-10T00:00:00+02:00",
      "luogoNascita": "Siena"
    },
    "accompagnatori": []
  },
  "datiConfermaAcquisto": {
    "idPolizza": 0,
    "hasAcceptedInformativaPrivacy": false,
    "hasAcceptedGeolocalizzazione": false,
    "hasAcceptedFiniCommerciali": false,
    "hasSpedizioneCartaceo": false
  },
  "premio": 0.0
});
});

router.post('/privacy/setCommercialPrivacy', (request, response) => {
	
  var reqBody = request.body; 	
	
  response.json({
  "result": "ok",
  "body": reqBody
	});
});

router.post('/cliente/phoneChangeRequest', (request, response) => {
	
  var reqBody = request.body	
	
  response.json({
  "result": "ok",
  "body": reqBody
	});
});


// set the server to listen on port 7777
app.listen(port, () => console.log(`Listening on port ${port}`))