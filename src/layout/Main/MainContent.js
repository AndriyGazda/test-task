import { HeroSection } from '../Section/HeroSection/HeroSection.js';
import { ConcertsSection } from '../Section/ConcertsSection/ConcertsSection.js';
import { MembersSection } from '../Section/MembersSection/MembersSection.js';
import { HistorySection } from '../Section/HistorySection/HistorySection.js';
import { ContactSection } from '../Section/ContactSection/ContactSection.js';

export const MainContent = () => {
  return `
    <main>
      ${HeroSection()}
      ${ConcertsSection()}
      ${MembersSection()}
      ${HistorySection()}
      ${ContactSection()}
    </main>   
  `;
};
