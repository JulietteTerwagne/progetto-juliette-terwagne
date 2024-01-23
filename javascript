document.addEventListener('DOMContentLoaded', function() {
    loadComments();
});

function loadComments() {
    const commentList = document.getElementById('comment-list');
    // Récupérer les commentaires depuis une source (base de données, serveur, etc.)
    // Pour l'instant, nous utilisons des données statiques.
    const comments = [
        { username: 'Utilisateur1', comment: 'Premier commentaire' },
        { username: 'Utilisateur2', comment: 'Deuxième commentaire' }
    ];

    commentList.innerHTML = comments.map(comment => `<li><strong>${comment.username} :</strong> ${comment.comment}</li>`).join('');
}

function addComment() {
    const usernameInput = document.getElementById('username');
    const commentInput = document.getElementById('comment');
    const commentList = document.getElementById('comment-list');

    const username = usernameInput.value.trim();
    const comment = commentInput.value.trim();

    if (username && comment) {
        // Ajouter le nouveau commentaire à la liste
        commentList.innerHTML += `<li><strong>${username} :</strong> ${comment}</li>`;
        // Effacer les champs du formulaire
        usernameInput.value = '';
        commentInput.value = '';
    } else {
        alert('Veuillez remplir tous les champs.');
    }
}