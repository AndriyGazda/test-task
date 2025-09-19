import './HeroSection.css';

export const HeroSection = () => {
  return `
    <section class="hero">  
      <div class="container hero-container">
        <h1 class="hero-name">Гурт «Грим та Грім»</h1>
        <div class="hero-body">
          <p>Справжній український рок, який гуркоче в серці.</p>
          <p>«Грим та Грім» — це поєднання <span style="color:#4dc9f1">потужних</span> гітарних рифів, чесних текстів і вибухової енергії сцени. Ми граємо для тих, хто цінує живий звук, свободу та силу музики. </p>
          <p><span style="color:#4dc9f1">Наші концерти</span> — це завжди катарсис і запал, драйв і єдність. Приєднуйся до нас на найближчих виступах і відчуй цей саунд наживо!</p>
        </div>
        <a href="#contact" class="hero-btn">ЗАМОВИТИ КВИТОК</a>
      </div>
    </section>`;
};
