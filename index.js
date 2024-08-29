// Add your code here

function submitData (userName, userEmail) {
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })
        .then(function (response) {
        return response.json();
        })
        .then(function (user) {
        const newID = user.id
        const idElement = document.createElement('p');
        idElement.textContent = newID;
        document.body.appendChild(idElement);
        })
        .catch(function (error) {
        const errorMessage = error.message;
        const errorElement = document.createElement('p');
        errorElement.textContent = errorMessage;
        document.body.appendChild(errorElement);
        })
}