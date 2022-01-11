const title = document.querySelector(".input-title");
const message = document.querySelector(".input-message");
const public = document.querySelector(".public-button");
const dashboardButton = document.querySelector(".dashboard-button");
const newPostButton = document.querySelector(".new-post-button");
const carti = document.querySelectorAll(".my-post-conteiner-each");
const updateCard = document.querySelector(".upd-but-js");
const deliteCard = document.querySelector(".del-but-js");
const email = window.localStorage.getItem("email");

dashboardButton.setAttribute('href', `/dashboard/${window.localStorage.getItem('email')}`);
if(newPostButton) {
    newPostButton.onclick = () => window.location = window.location + "/newpost";
} 

if(public) {
    public.onclick = async (e) => {
        const messageData = message.value.trim();
        const titleData = title.value.trim();
        const timeData = new Date();

        const response = await fetch('/dashboard', {
            method: 'POST',
            body: JSON.stringify({ 
                title: titleData,  
                exhibition_date: timeData, 
                description: messageData,
                email,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            location.href = location.origin
        } else {
            alert('Failed to log in.');
        }
    };
}

if(carti) {
    carti.forEach(card => {
        const id = card.getAttribute("id");
    
        card.onclick = () => {
            window.location.href = window.location.href + "/" + id;
        };
    });
}

if(updateCard) {
    updateCard.onclick = async (e) => {
        const id = location.href.split("/").pop();
        const messageData = message.value.trim();
        const titleData = title.value.trim();
        const timeData = new Date();

        const response = await fetch(`/dashboard/${email}/${id}/update`, {
            method: 'POST',
            body: JSON.stringify({ 
                title: titleData,  
                exhibition_date: timeData, 
                description: messageData,
                email,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            location.href = location.origin
        } else {
            alert('Failed to log in.');
        }
    };
}

if(deliteCard) {
    deliteCard.onclick = async (e) => {
        const id = location.href.split("/").pop();

        const response = await fetch(`/dashboard/${email}/${id}/delete`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            location.href = location.origin
        } else {
            alert('Failed to log in.');
        }
    };
}