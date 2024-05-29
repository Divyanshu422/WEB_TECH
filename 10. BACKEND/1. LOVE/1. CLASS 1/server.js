
//* Step 1: creating the instance of express:
const express = require('express');
const app = express();

//* Step 2: Defining the Port and server starting message using listen() method
//* Activating the server on the port 3000 
app.listen(3000, ()=>{
    console.log('Server Started')
}) 

//* geting the object of body-parser: used in the post and put request
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //! mentioning to parse the json Data and add it to the request.body 

//* Step 3: Creating the get request:
app.get('/', (request, response) => {
    response.send('Hello friend!! welcome to Backend ')
})

//* Step 4: using the post request to submit the data.
//* In the post method the data is available inside the request call. hence we need to fetch the data first.
app.post('/api/car',(request, response)=> {
        //!2 Destructuring the URL
        const {name, brand} = request.body;
        console.log(name +  " " + brand);
        console.log('Car submitted successfully')
        response.send('thanks for connecting us');
})