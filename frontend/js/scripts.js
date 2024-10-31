document.addEventListener('DOMContentLoaded', () => {
    const postListElement = document.getElementById('post-list');
    const postContentElement = document.getElementById('post-content');
    const postId = window.location.pathname.split('/').pop();

    if (postListElement) {
        fetch('/api/posts')
            .then(response => response.json())
            .then(posts => {
                posts.forEach(post => {
                    const li = document.createElement('li');
                    li.innerHTML = `<a href="posts/post.html?id=${post._id}">${post.title}</a>`;
                    postListElement.appendChild(li);
                });
            });
    }

    if (postContentElement) {
        fetch(`/api/posts/${postId}`)
            .then(response => response.json())
            .then(post => {
                postContentElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <p>Posted on: ${new Date(post.createdAt).toLocaleString()}</p>
                `;
            });
    }
});
