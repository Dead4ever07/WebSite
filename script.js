const postForm = document.getElementById('postForm');

postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (title && description) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push({ title, description });
        localStorage.setItem('posts', JSON.stringify(posts));
        postForm.reset();
        alert('Post created! View it on the Posts page.');
    }
});

