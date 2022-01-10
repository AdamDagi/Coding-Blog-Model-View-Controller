const title = document.querySelector(".input-title");
const message = document.querySelector(".input-message");
const public = document.querySelector(".public-button");
const dashboardButton = document.querySelector(".dashboard-button");
const newPostButton = document.querySelector(".new-post-button");

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
            email: window.localStorage.getItem("email"),
        }),
        headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log in.');
    }
};
}