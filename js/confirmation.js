

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getLocalStorage(key) {
    return localStorage.getItem(key);
}

function writeConfirmation () {


    let firstName = getLocalStorage("fName");
    let lastName = getLocalStorage("lName");
    let age = getLocalStorage("valAge");

    let confirmation = `<p><span class="confirmationLabel">Vorname:</span> ${firstName}</p>
                            <span class="confirmationLabel">Nachname:</span> ${lastName}</p>
                            <span class="confirmationLabel">Alter:</span> ${age}</p>`;
        // die Beastätigung wird als innerHGTML gesetzt
        document.getElementById("confirmation-message").innerHTML = confirmation;
        console.log(confirmation);

 }