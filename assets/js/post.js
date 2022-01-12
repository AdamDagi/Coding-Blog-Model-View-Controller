const comment = document.querySelector(".comment-input");
const addComment = document.querySelector(".add-comment-button");
const postId = document.querySelector(".post-conteiner");
const deleteButtons = document.querySelectorAll(".delite-comment-button");
const updateButtons = document.querySelectorAll(".update-comment-button");
const textArea = document.querySelector(".comment-input");
const upButton = document.querySelector(".up-com-button");

addComment.onclick = async () => {
    const commentData = comment.value.trim();
    const timeData = new Date();
    const publicComRes = await fetch('/api/publiccomment', {
        method: 'POST',
        body: JSON.stringify({ 
            email: window.localStorage.getItem('email'), 
            exhibition_date: timeData, 
            message: commentData,
            postcard_id: postId.getAttribute("id"),
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    location.href=location.href;
};

if(deleteButtons) {
    deleteButtons.forEach(async(deleteComment) => {
        deleteComment.onclick = async () => {
            const response = await fetch(`/api/publiccomment/${deleteComment.getAttribute("id")}/delete`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            location.href=location.href;
        }
    });
};

if(updateButtons) {
    updateButtons.forEach((updateComment) => {
        updateComment.onclick = (e) => {
            const comment = e.target.parentElement.parentElement.parentElement.firstElementChild.innerText;
            textArea.value = comment;
            addComment.style.display = "none";
            upButton.style.display = "block";
            const id = e.target.getAttribute("id");
            upButton.setAttribute("id", id);
        }
    });
};

if(upButton) {
    upButton.onclick = async () => {
        const commentData = comment.value.trim();
        const timeData = new Date();
        const id = upButton.getAttribute("id");
        const response = await fetch(`/api/publiccomment/${id}/update`, {
            method: 'POST',
            body: JSON.stringify({ 
                email: window.localStorage.getItem('email'), 
                exhibition_date: timeData, 
                message: commentData,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        location.href=location.href;
    };
};