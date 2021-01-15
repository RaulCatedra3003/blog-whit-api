//NAVBAR
export const Navbar = () => {
  const template = `
  <header class="header">
    <h1 class="header__title">Blog with API</h1>
  </header>
  <nav class="nav-page">
    <button class="nav-page__button selected">1</button>
    <button class="nav-page__button">2</button>
    <button class="nav-page__button">3</button>
    <button class="nav-page__button">4</button>
    <button class="nav-page__button">5</button>
  </nav>`;
  return template;
};
