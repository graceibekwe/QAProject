let name = document.getElementById('Name');
let number = document.getElementById('Number');
let budget = document.getElementById('Budget');

// document.getElementById('addapp').addEventListener('click', (event) => addApplicant());

function addApplicant() {
    fetch('http://localhost:9000/applicants/add', {
        method: 'POST',
        body: JSON.stringify({
            "name": name.value,
            "phoneNumber": number.value,
            "budget": budget.value,
        }),
        headers: { "Content-Type": "application/json" }
    });
}