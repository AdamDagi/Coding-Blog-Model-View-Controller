const comment = document.querySelector(".comment-input");
const addComment = document.querySelector(".add-comment-button");
const postId = document.querySelector(".post-conteiner");

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