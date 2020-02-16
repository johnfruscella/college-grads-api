// Post
document.getElementById('submitPost').addEventListener('click', postRequest);




async function postdata() {

    let postJson = (create_Obj('postStudent'));

     document.getElementById('request_message').innerText = 'Summiting';

     await fetch('http://localhost:3000/admin', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },

         body: postJson

     })
    .then(res => { return res.json() })
    .then(data => console.log(data))
    .catch(error => console.log('John ERROR'))
    }