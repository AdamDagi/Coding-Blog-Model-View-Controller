const cards = document.querySelectorAll(".post-card-conteiner");

cards.forEach(card => {
    const id = card.getAttribute("id");

    card.onclick = () => {
        window.location.href = window.location.href + "post/" + id;
    };
});