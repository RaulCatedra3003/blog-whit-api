//POST MODAL
export const PostModal = ({ title, body, username, email }) => {
  const template = `
  <section class="postModal-item">
    <section class="postModal-item__content">
      <section class="postModalContent__title">
        <h2>${title}</h2>
        <p>${body}</p>
      </section>
      <section class="postModalContent__user">
        <p>User: ${username}</p>
        <p>Email: ${email}</p>
      </section>
    </section>
    <section class="postModal-item__comentarios">
    </section>
  </section>`;
  return template;
};
