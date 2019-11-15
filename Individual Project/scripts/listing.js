
let address = document.getElementById('Address');
let postcode = document.getElementById('Postcode');
let price = document.getElementById('Price');
let Hold = document.getElementById('Hold');
let photo = document.getElementById('Photo');
let card = document.getElementById('photocard');

const id = new URLSearchParams(window.location.search).get('id');

initial();

function initial() {

    fetch('http://localhost:9000/listings/find', {
        method: 'POST',
        body: JSON.stringify({
            "id": id
        }),
        headers: { "Content-Type": "application/json" }
    })
        .then(res => res.json())
        .then(json => listing(json[0]))
        .catch(err => console.log(err));

}


function listing(result) {

    let photocard = document.createElement('img');
    photocard.style = "width:50%";
    photocard.src = result.photo;

    address.value = result.address;
    postcode.value = result.postcode;
    price.value = result.price;
    Hold.value = result.Hold;
    photo.value = result.photo;

    card.appendChild(photocard);

}

document.getElementById('delete').addEventListener('click', (event) => deleteProperty());
document.getElementById('update').addEventListener('click', (event) => updateProperty());

function deleteProperty() {

    fetch('http://localhost:9000/listings/delete/' + id, {
        method: 'DELETE'
    });
}

function updateProperty() {

    fetch('http://localhost:9000/listings/update', {
        method: 'POST',
        body: JSON.stringify({
            "id": id,
            "address": address.value,
            "postcode": postcode.value,
            "price": price.value,
            "Hold": Hold.value,
            "photo": photo.value
        }),
        headers: { "Content-Type": "application/json" }
    });

}