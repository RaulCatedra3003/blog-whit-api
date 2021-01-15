export const EditPostModal = ({ title, body, id }) => {
  const template = `
  <section class="postModal-item">
    <section class="postModal-item__content">
      <section class="postModal-item__close">
        <button class="bx bx-x-circle"></button>
      </section>
      <h2>Edit post</h2>
      <form class="editPostModal-Content">
        <label for="editPostModal-Content__title">Title:</label>
        <input type="text" id="editPostModal-Content__title" value="${title}">
        <label for="editPostModal-Content__body">Body:</label>
        <textarea id="editPostModal-Content__body">${body}</textarea>
        <section class="postModal-item__button">
          <button id="save-button" data-postId="${id}">Save</button>
        </section>
      </form>
    </section>
  </section>`;
  return template;
};
