
const output = document.getElementById('output');
const postcode = document.getElementById('Postcode');

display();

function display() {

    let kids = output.children;

    for (let i = kids.length - 1; i >= 0; i--) {
        output.removeChild(kids[i]);
    };

    fetch('http://localhost:9000/listings/get')
        .then(res => res.json())
        // .then(json => console.log(json))
        .then(json => listProperties(json))
        .catch(err => console.log(err));

}


function listProperties(results) {
    console.log(results);

    results.map(result => {

        let item = document.createElement('div');
        item.className = "w3-col l3 m6 w3-margin-bottom";

        let container = document.createElement('div');
        container.className = "w3-display-container";
        container.addEventListener('click', () => window.location.href = "./listing.html?id=" + result.id);

        let photo = document.createElement('img');
        photo.style = "width:100%";
        photo.src = result.photo;

        let details = document.createElement('div');
        details.className = "w3-display-topleft w3-black w3-padding";
        details.innerText = result.address + "\n" +
            result.postcode + "\n" +
            "£" + result.price + "\n" +
            "Hold: " + result.Hold;

        let postcode = document.createElement('p');
        postcode.innerText = result.postcode;

        let price = document.createElement('p');
        price.className = 'w3-text-teal';
        price.innerText = "£" + result.price;

        let hold = document.createElement('p');
        hold.innerText = "Hold: " + result.Hold;

        container.appendChild(photo);
        container.appendChild(details);
        // container.appendChild(postcode);
        // container.appendChild(price);
        // container.appendChild(hold);

        item.appendChild(container);
        output.appendChild(item);
    });
}


function propSearch() {

    let kids = output.children;

    for (let i = kids.length - 1; i >= 0; i--) {
        output.removeChild(kids[i]);
    };

    fetch('http://localhost:9000/listings/search', {
        method: 'POST',
        body: JSON.stringify({
            "postcode": postcode.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(json => listProperties(json))
        .catch(err => console.log(err));
}