import './ContactSection.css';
import { LocationMap } from '../../../components/LocationMap/LocationMap.js';
import { ContactForm } from '../../../components/ContactForm/ContactFrom.js';

export const ContactSection = () => {
  return `
    <section class="contact" id="contact">
        <div class="container contact-container">
            <h2 class="contact-label">Зв’яжись з нами</h2>
            <p>Хочеш заказати виступ або маєш питання? Пиши!</p>
            <div class="contact-content-wrapper">
                <div class="">
                    ${ContactForm()}
                </div>
    
                <div class="">
                    ${LocationMap()}
                </div>
            </div>
        </div> 
    </section>
  `;
};
