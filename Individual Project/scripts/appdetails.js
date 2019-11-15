let name = document.getElementById('Name');
let number = document.getElementById('ContactNumber');
let budget = document.getElementById('Budget');

const id = new URLSearchParams(window.location.search).get('id');

initial();

function initial() {

    fetch('http://localhost:9000/applicants/find', {
        method: 'POST',
        body: JSON.stringify({
            "id": id
        }),
        headers: { "Content-Type": "application/json" }
    })
        .then(res => res.json())
        .then(json => details(json[0]))
        .catch(err => console.log(err));

}


function details(result) {

    name.value = result.name;
    number.value = result.phoneNumber;
    budget.value = result.budget;

}

document.getElementById('delete').addEventListener('click', (event) => deleteApp());
document.getElementById('update').addEventListener('click', (event) => updateApp());

function deleteApp() {

    fetch('http://localhost:9000/applicants/delete/' + id, {
        method: 'DELETE'
    });
}

function updateApp() {

    fetch('http://localhost:9000/applicants/update', {
        method: 'POST',
        body: JSON.stringify({
            "id": id,
            "name": name.value,
            "phoneNumber": number.value,
            "budget": budget.value,
        }),
        headers: { "Content-Type": "application/json" }
    });

}