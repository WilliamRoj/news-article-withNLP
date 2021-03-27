

projectData = {};

const dotenv = require('dotenv');
dotenv.config();

// console.log(`Your API key is ${process.env.API_KEY}`);

// You could call it aylienapi, or anything else
// var textapi = new aylien({
//     application_key: process.env.API_KEY
//  });

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
// ------------------------------//
  //   Get example
const baseURL = '//https://api.meaningcloud.com/sentiment-2.1';
const apiKey = '=388289462d0614388a47705b76b3114b';

document.getElementById('generate').addEventListener('click', performAction);
    
function performAction(e){
  const newCity =  document.getElementById('city').value;
   getFeelings(baseURL, apiKey, urlInput, lang)
    .then(function(data){
        console.log(data);
        postData('http://localhost:8080/add', {
            name: req.body.name
   }) .then(function() {
    updateUI()
  });
};

 const getFeelings = async (baseURL, apiKey, urlInput, lang) =>{
    //console.log(data);
      const response = await fetch(baseURL+apiKey+urlInput+lang,) 
       try {
         const newData = await response.json();
         console.log(newData);
         return newData;
       }catch(error) {
       console.log("error", error);
       // appropriately handle the error
       }
   }

 

  // Update the UI
  const updateUI = async () => {
    const request = await fetch('http://localhost:8080/all');
    try{
      const allData = await request.json();
      document.getElementById('results').innerHTML = `Date - ${allData.latitude}`;
      document.getElementById('temp').innerHTML = `Temp - ${allData.longitude}`;
      document.getElementById('content').innerHTML = `How i feel - ${allData.country}`;
  
    }catch(error){
      console.log("error", error);
    }
  }