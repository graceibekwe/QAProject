
const output = document.getElementById('output');

display();

function display() {

    let kids = output.children;

    for (let i = kids.length - 1; i >= 0; i--) {
        output.removeChild(kids[i]);
    }

    fetch('http://localhost:9000/viewings/get')
        .then(res => res.json())
        // .then(json => console.log(json))
        .then(json => listViewings(json))
    // .catch(err => console.log(err));

}


function listViewings(results) {
    console.log(results);

    results.map(result => {
        const { name = '!!!!' } = result.applicant || {};
        const { address = '!!!!', postcode = '!!!!' } = result.listing || {};

        let item = document.createElement('div');
        item.className = "w3-col l3 m6 w3-margin-bottom";
        item.addEventListener('click', () => window.location.href = "./viewdetails.html?id=" + result.id);

        let addressEl = document.createElement('h3');
        addressEl.innerText = address;

        let postcodeEl = document.createElement('h3');
        postcodeEl.innerText = postcode;

        let applicantEl = document.createElement('p');
        applicantEl.className = "w3-opacity";
        applicantEl.innerText = name;

        let date = document.createElement('p');
        date.className = "w3-opacity";
        date.innerText = result.date;

        item.appendChild(addressEl);
        item.appendChild(postcodeEl);
        item.appendChild(applicantEl);
        item.appendChild(date);

        output.appendChild(item);
    });
}