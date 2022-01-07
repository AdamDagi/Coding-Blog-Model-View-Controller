const comment = document.querySelector(".comment-input");
const addComment = document.querySelector(".add-comment-button");
const postId = document.querySelector(".post-conteiner");

addComment.onclick = async () => {
    const commentData = comment.value.trim();
    const authorData = "author";
    const timeData = new Date();
    const publicComRes = await fetch('/publiccomment', {
        method: 'POST',
        body: JSON.stringify({ 
            autor: authorData, 
            exhibition_date: timeData, 
            message: commentData,
            postcard_id: postId.getAttribute("id"),
        }),
        headers: { 'Content-Type': 'application/json' },
    });
}