import './Header.css';

export const Header = () => {
  return `
    <header>
      <div class="header-container container">
        <div class="header-logo">
          G&G
        </div>
        <nav class="header-nav">
          <a href="#history">Про гурт</a>
          <a href="#concerts">Концерти</a>
          <a href="#members">Галарея</a>
          <a href="#contact">Контакти</a>
        </nav>            
      </div>
    </header>
  `;
};
