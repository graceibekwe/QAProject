let property = document.getElementById('property');
let applicant = document.getElementById('applicant');
let date = document.getElementById('date');

const id = new URLSearchParams(window.location.search).get('id');

initial();

function initial() {

    fetch('http://localhost:9000/viewings/find', {
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

    property.value = result.listingId;
    applicant.value = result.applicantId;
    date.value = result.date;

}

document.getElementById('delete').addEventListener('click', (event) => deleteView());
document.getElementById('update').addEventListener('click', (event) => updateView());

function deleteView() {

    fetch('http://localhost:9000/viewings/delete/' + id, {
        method: 'DELETE'
    });
}

function updateView() {

    fetch('http://localhost:9000/viewings/update', {
        method: 'POST',
        body: JSON.stringify({
            "id": id,
            "listingId": property.value,
            "applicantId": applicant.value,
            "date": date.value,
        }),
        headers: { "Content-Type": "application/json" }
    });

}