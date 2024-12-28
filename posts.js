const postList = document.getElementById('postList');

document.addEventListener('DOMContentLoaded', () => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    if (posts.length === 0) {
        postList.innerHTML = '<p>No posts to display.</p>';
    } else {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.description}</p>
            `;
            postList.appendChild(postElement);
        });
    }
});
