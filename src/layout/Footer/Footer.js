import './Footer.css';

export const Footer = () => {
  return `
    <footer>        
      <div class="container">  
        <div class="footer-wrapper">
          <div class="footer-info">
            <p>&copy; 2024 The Rockers. Всі права захищені.</p>
            <div>
               <a href="mailto:booking@lotoplay">booking@lotoplay</a> • <a href="tel:+380931234567">+38 (093) 123-45-67</a>
            </div>
          </div>
           <div class="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a> • 
            <a href="https://youtube.com" target="_blank" rel="noopener">YouTube</a> • 
            <a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  `;
};
