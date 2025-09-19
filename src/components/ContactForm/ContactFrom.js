import './ContactForm.css';
import '../../utils/contactForm.js';

export const ContactForm = () => {
  return `
    <section class="contactForm">
      <form id="contactForm" class="contact-form-side">
        <div class="form-group-wrapper">        
          <div class="form-group form-input">
            <label for="first-name">Ім'я</label>
            <input type="text" id="first-name" name="firstName"  >
            <small class="error-message"></small>
          </div>
                          
          <div class="form-group form-input">
            <label for="email">Email</label>
            <input type="email" id="email" name="email"  >
            <small class="error-message"></small>
          </div>
                          
          <div class="form-group form-textarea">
            <label for="message">Повідомлення</label>
            <textarea id="message" name="message" rows="5"  placeholder="Розкажи про свої ідеї..."></textarea>
            <small class="error-message"></small>
          </div>
        </div>               
        <button type="submit" class="send-button">Відправити</button>
      </form>
    </section>
  `;
};
