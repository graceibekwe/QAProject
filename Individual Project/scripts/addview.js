let date = document.getElementById('Date');
let property = document.getElementById('Property');
let applicant = document.getElementById('Applicant');

// document.getElementById('add').addEventListener('click', (event) => addViewing());

function addViewing() {
    fetch('http://localhost:9000/viewings/add', {
        method: 'POST',
        body: JSON.stringify({
            "date": date.value,
            "listingId": property.value,
            "applicantId": applicant.value,
        }),
        headers: { "Content-Type": "application/json" }
    });
}