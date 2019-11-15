
const output = document.getElementById('output');

display();

function display() {

    let kids = output.children;

    for (let i = kids.length - 1; i >= 0; i--) {
        output.removeChild(kids[i]);
    }

    fetch('http://localhost:9000/applicants/get')
        .then(res => res.json())
        // .then(json => console.log(json))
        .then(json => listApps(json))
        .catch(err => console.log(err));

}


function listApps( results ) {
    console.log(results);

    results.map(result => {
        let item = document.createElement('div');
        item.className = "w3-col l3 m6 w3-margin-bottom";
        item.addEventListener('click', () => window.location.href = "./appdetails.html?id=" + result.id);

        let name = document.createElement('h3');
        name.innerText = result.name;

        let phoneNumber = document.createElement('p');
        phoneNumber.innerText = "Contact Number: " + result.phoneNumber;

        let budget = document.createElement('p');
        budget.innerText = "Budget: £" + result.budget + "\n\n\n";

        item.appendChild(name);
        item.appendChild(phoneNumber);
        item.appendChild(budget);
        
        output.appendChild(item);
    });
}