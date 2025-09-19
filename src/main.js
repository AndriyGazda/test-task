import './style.css';
import { Header } from './layout/Header/Header.js';
import { MainContent } from './layout/Main/MainContent.js';
import { Footer } from './layout/Footer/Footer.js';

document.querySelector('#app').innerHTML = `
  ${Header()}
  ${MainContent()}
  ${Footer()}
`;
