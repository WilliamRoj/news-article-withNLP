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

// const postData = async ( url = '', data = {})=>{
//     //console.log(data);
//     const response = await fetch(url, {
//     method: 'POST', // GET, POST, PUT, DELETE, etc. 
//     credentials: 'same-origin', // Include, same -origin, omit
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     // Body data type must match "Content-Type" header        
//     body: JSON.stringify(data), // Body data type must match "Content-Type" Header
//     });

//     try {
//         const newData = await response.json();
//         console.log(newData);
//         return newData;
//     }catch(error) {
//     console.log("error", error)
//     // appropriately handle the error
//     }
// }