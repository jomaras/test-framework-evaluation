const addCardButton = document.querySelector("#cards-section .add-card-button");

addCardButton.addEventListener("click", e => {
    alert("Adding cards")
});

const deleteCardButtons = document.querySelectorAll("#cards-container .delete-button");
deleteCardButtons.forEach(deleteCardButton => {
    deleteCardButton.addEventListener("click", handleDeleteClick);
});

function handleDeleteClick(e){
    const deleteButton = e.currentTarget;
    const card = deleteButton.parentElement;
    const cardContainer = card.parentElement;

    cardContainer.removeChild(card);
}