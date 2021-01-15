//POST MODAL
export const PostModal = ({ title, body, username, email, postId }) => {
  const template = `
  <section class="postModal-item">
    <section class="postModal-item__content">
      <section class="postModal-item__close">
        <button class="bx bx-x-circle"></button>
      </section>
      <section class="postModalContent__title">
        <h2>${title}</h2>
        <p>${body}</p>
      </section>
      <section class="postModalContent__user">
        <p><strong>User:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
      </section>
      <section class="postModal-item__comentarios">
        <h2>Comments:</h2>
        <button id="comment-button" data-postId="${postId}">Show comments</button>
      </section>
      <section id="comments-content"></section>
    </section>
  </section>`;
  return template;
};
