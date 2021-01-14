//POST
export const Post = ({ title, body }) => {
  const template = `
  <section class="post-item">
    <section class="post-item__content">
      <h2>${title}</h2>
      <p>${body}</p>
    </section>
    <section class="post-item__button">
      <button></button>
      <button></button>
    </section>
  </section>`;
  return template;
};
