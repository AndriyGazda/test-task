import './MembersSection.css';
import maksImage from '../../../assets/images/maks-guitarist.webp';
import olenaImage from '../../../assets/images/olena-vocal.webp';
import tarasImage from '../../../assets/images/taras-drummer.webp';

export const MembersSection = () => {
  return `
    <section class="members" id="members">
      <div class="container members-container">  
        <h2 class="members-label">Учасники гурту</h2>
        <div class="members-grid">
          <div class="member-card">
            <img src="${maksImage}" alt="Максим — гітара" class="member-photo">
            <h3 class="member-card-name">Максим — гітара</h3>
          </div>
          <div class="member-card">  
            <img src="${olenaImage}" alt="Олена — вокал" class="member-photo">
            <h3 class="member-card-name">Олена — вокал</h3>
          </div>
          <div class="member-card">
            <img src="${tarasImage}" alt="Тарас — барабани" class="member-photo">
            <h3 class="member-card-name">Тарас — барабани</h3>
          </div>
        </div>
      </div>
    </section>`;
};
