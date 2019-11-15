
let address = document.getElementById('Address');
let postcode = document.getElementById('Postcode');
let price = document.getElementById('Price');
let Hold = document.getElementById('Hold');
let photo = document.getElementById('Photo');

let file = document.getElementById('photoInput');
document.getElementById('addprop').addEventListener('click', (event) => photoFile());

function photoFile() {
    // debugger;
    console.log(file);

}

document.getElementById('addprop').addEventListener('click', (event) => addProperty());

function addProperty() {

    fetch('http://localhost:9000/listings/add', {
        method: 'POST',
        body: JSON.stringify({
            "address": address.value,
            "postcode": postcode.value,
            "price": price.value,
            "Hold": Hold.value,
            "photo": photo.value,
        }),
        headers: { "Content-Type": "application/json" }
    }); 
    //.then(resp => resp.json());
        // .then(data => {
            // return fetch('http://localhost:9000/listing/addImage/' + data.id, {
            //     method: 'POST',
            //     body: file.files[0]
            // })
        // })

    // window.alert("Property added successfully!");

}