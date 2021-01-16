//Comment

export const Comment = ({ name, body, email }) => {
  const template = `
  <section class="comment-item">
    <section class="comment-item__content">
      <h2>Title: ${name}</h2>
      <p>${body}</p>
      <p>Email: ${email}</p>
      <hr />
  </section>`;
  return template;
};
