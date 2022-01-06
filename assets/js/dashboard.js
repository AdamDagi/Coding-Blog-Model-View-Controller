const title = document.querySelector(".input-title");
const message = document.querySelector(".input-message");
const public = document.querySelector(".public-button");

public.onclick = async (e) => {
    const messageData = message.value.trim();
    const titleData = title.value.trim();
    const authorData = "author";
    const timeData = new Date();

    const response = await fetch('/dashboard', {
        method: 'POST',
        body: JSON.stringify({ title: titleData, autor: authorData, exhibition_date: timeData, description: messageData }),
        headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log in.');
    }
};