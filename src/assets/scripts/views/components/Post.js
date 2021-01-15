//POST
export const Post = ({ title, body }) => {
  const template = `
  <section class="post-item">
    <section class="post-item__content">
      <h2>${title}</h2>
      <hr />
      <p>${body}</p>
    </section>
    <section class="post-item__button">
      <button class='bx bx-edit'></button>
      <button class='bx bxs-trash'></button>
    </section>
  </section>`;
  return template;
};
