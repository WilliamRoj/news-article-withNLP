

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })

    app.get('/all', sendData);


//   GET
  function sendData(req, res){
      res.send(projectData);
  }

    app.post('/add', data);
    function data(req, res){
      // console.log(res.body);
        newEntry = {
          name: req.body.name
        }
    projectData = newEntry;
  }

  }   
  export { handleSubmit }
