fetch('http://localhost:5000/api/posts')
  .then(response => response.json())
  .then(data => {
    const postsContainer = document.getElementById('posts');
    data.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h3><a href="posts/post.html">${post.title}</a></h3>
        <p>${post.content.substring(0, 100)}...</p>
        <p>Posted on: ${new Date(post.createdAt).toLocaleString()}</p>
      `;
      postsContainer.appendChild(postElement);
    });
  });
