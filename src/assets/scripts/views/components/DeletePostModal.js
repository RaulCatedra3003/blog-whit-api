export const DeletePostModal = postId => {
  const template = `
  <section class="postModal-item">
    <section class="postModal-item__content">
      <section class="postModal-item__close">
        <button class="bx bx-x-circle"></button>
      </section>
      <h2 class="delete-title">You are going to delete the post. Are you sure?</h2>
      <section class="postModal-item__button">
        <button id="yes-button" data-postId="${postId}">Yes</button>
        <button id="no-button">No</button>
      </section>
    </section>
  </section>`;
  return template;
};
