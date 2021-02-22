import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './style/resets.scss'
import './style/base.scss'
import './style/footer.scss'
import './style/form.scss'
import './style/header.scss'

console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");

fetch("https://api.meaningcloud.com/sentiment-2.1?key=API_KEY&of=json&url=<URL_INPUT>&lang=en", {
  method: "POST"
})


const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey = '388289462d0614388a47705b76b3114b&of=json&url=';
const lang = '&lang=en';


  
  document.getElementById('generate').addEventListener('click', performAction);
  
  function performAction(e){
    const urlInput =  document.getElementById('name').value;
     getFeelings(baseURL, urlInput, apiKey)
      .then(function(data){
          console.log(data);
          postData('http://localhost:8080/add', {
            name:urlInput});
     }) .then(function() {
      updateUI()
    });
  };

  //   Get example

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

// post Eample
    const postData = async ( url = '', data = {})=>{
        //console.log(data);
        const response = await fetch(url, {
        method: 'POST', // GET, POST, PUT, DELETE, etc. 
        credentials: 'same-origin', // Include, same -origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data), // Body data type must match "Content-Type" Header
        });
    
        try {
            const newData = await response.json();
            console.log(newData);
            return newData;
        }catch(error) {
        console.log("error", error)
        // appropriately handle the error
        }
    }


  //////////////////////////




// Update the UI
const updateUI = async () => {
    const request = await fetch('http://localhost:8080/all');
    try{
      const allData = await request.json();
      document.getElementById('name').innerHTML = `Results are - ${allData.name}`;
     
    }catch(error){
      console.log("error", error);
    }
  }
