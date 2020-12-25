contacts.onclick = function() {
    contacts.classList.toggle("show");
 }

function ShowContacts() {
    if(contacts.classList.contains("show") === false) {
        contacts.classList.add("show");
    }
}