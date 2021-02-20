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