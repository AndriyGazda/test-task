import './LocationMap.css';

export const LocationMap = () => {
  return `
    <section class="location" id="location">
      <div class="location-card">
        <h2 class="location-label">Наше місцезнаходження</h2>
        <div class="map-wrapper">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325510.51388181!2d30.165205947777697!3d50.402889181796425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1758292955574!5m2!1suk!2sua" 
           width="450" 
           height="250" 
           style="border:0;" 
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  `;
};
