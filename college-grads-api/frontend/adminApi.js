// Post
document.getElementById('submitPost').addEventListener('click', postRequest);

document.getElementById('submitUpdate').addEventListener('click', putRequest);

document.getElementById('submitDelete').addEventListener('click', deleteRequest);




async function postRequest() {


  let postJson = (create_Obj('postStudent'));


   document.getElementById('requestMessage').innerText = 'Summiting';

   await fetch('http://localhost:3000/admin', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
      
       body: postJson.JSON.stringify(data)

   })

     //returns the response from the api and parses from readableStream to JSON
     .then( readable_stream_res => {

         return readable_stream_res.json()
     })

     //the json response is used to display status code/errors to the client
     .then( parsedResponse => {

         if (!checkStatusOk(parsedResponse)) {
             return parsedResponse
         }

       //   console.log(parsedResponse.document);

         let newPostDocument = parsedResponse.document,

         PostHTML = display_doc_info(newPostDocument);
         
         document.getElementById('responseElm').innerHTML = `New Post:${PostHTML}`;

         document.getElementById('requestMessage').innerText = 'Student Successfully Created';
         

     })

     .catch( err => {

         console.log(err);
         
     })

     .finally( () => {clear_formData(postStudent); setTimeout(reset_req_mes, 3000)})


}
