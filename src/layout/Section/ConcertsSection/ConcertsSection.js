import './ConcertsSection.css';

const CONCERTS = [
  {
    city: 'Київ',
    place: 'Docker-G Pub',
    seats: 250,
    date: '25.10.2025, 19:00'
  },
  {
    city: 'Львів',
    place: 'FESTrepublic',
    seats: 400,
    date: '01.11.2025, 20:00'
  },
  {
    city: 'Одеса',
    place: 'Зелений театр',
    seats: 700,
    date: '08.11.2025, 19:30'
  },
  { city: 'Харків', place: 'ArtZavod', seats: 500, date: '16.11.2025, 19:00' }
];

export const ConcertsSection = () => {
  const rows = CONCERTS.map(
    concert => `
    <tr class="concerts-table-row">
      <td class="concerts-table-cells" data-label>${concert.city} — ${concert.place}</td>
      <td class="concerts-table-cells" data-label>${concert.seats}</td>
      <td class="concerts-table-cells" data-label>${concert.date}</td>
      <td class="concerts-table-cells"><a href="#contact" class="concert-table-btn-buy">Замовити квиток</a></td>
    </tr>
  `
  ).join('');

  return `
    <section class="upcoming-concerts" id="concerts">
      <div class="container">
           <div class="concerts-table-wrapper">
              <table class="concerts-table">
                  <thead class="concerts-table-head">
                      <tr>
                        <th colspan="4"><h2>Найближчі концерти</h2></th>
                      </tr>
                      <tr>
                          <th>Місто/Заклад</th>
                          <th>К-сть місць</th>
                          <th>Дата і час</th>
                          <th></th> 
                      </tr>
                  </thead>
                  <tbody>
                      ${rows}
                  </tbody>
              </table>
          </div>
      </div>
    </section>
  `;
};
