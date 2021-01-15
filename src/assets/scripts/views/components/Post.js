//POST
export const Post = ({ title, body, id, userId }) => {
  const template = `
  <section class="post-item">
    <section class="post-item__content">
      <h2 id="${id}" data-userId="${userId}">${title}</h2>
      <hr />
      <p>${body}</p>
    </section>
    <section class="post-item__button">
      <button class='bx bx-edit' data-id="${id}"></button>
      <button class='bx bxs-trash'></button>
    </section>
  </section>`;
  return template;
};
