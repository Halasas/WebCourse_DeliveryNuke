function AddComment(name, text) {
    var message = document.createElement("div");
    message.append(reviewTemplate.content.cloneNode(true));
    if(text && name) {
        message.firstElementChild.firstElementChild.textContent = name;
        message.firstElementChild.lastElementChild.textContent = text;
        reviewsContainer.appendChild(message);
    }
}

function SendComment() {
    AddComment(usernameTextField.value, reviewnputTextField.value);
    usernameTextField.value = "";
    reviewnputTextField.value = "";
}

AddComment("Хирохи́то", "Красиво, конечно, но из-за пары хлопков потерял всю власть в стране и люди погибли, обидно как-то.");
AddComment("Лесли Гровс", "Хз чё японцу не понравилось, мне зашло! Отличное качество, спасибо Эйнштейну, что посоветовал к вам обратиться.");
AddComment("Эйнштейн", "Я так-то пацифист, но немцы первые начали.");

