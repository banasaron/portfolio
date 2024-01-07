const textToWrite = {
  'polish': 'Jestem uczniem drugiej klasy Zespołu Szkół Mechanicznych, Elektrycznych i Elektronicznych w Toruniu, gdzie uczęszczam do klasy technik-programista. Posiadam umiejętności językowe na poziomie B1 z angielskiego, komunikatywnie posługuję się niemieckim, a także rozpocząłem naukę języka norweskiego.<br><br>Mieszkam w Brzozówce, w powiecie toruńskim, co dla mnie nie tylko oznacza miejsce zamieszkania, ale także przestrzeń do rozwoju zainteresowań poza szkołą.<br><br>Moje doświadczenia zawodowe obejmują ukończenie kursów z projektu "Blisko Pracodawcy" z zakresu tworzenia stron internetowych i grafiki komputerowej. Ponadto, w ramach tego projektu, odbyłem wakacyjny staż zawodowy, co umożliwiło mi zdobycie praktycznych umiejętności i wglądu w branżę.<br><br> Podczas projektu CodeWeek prowadziłem dwutygodniowe zajęcia z podstaw JavaScript dla klas pierwszych. Doświadczenie to nie tylko pozwoliło mi przekazać wiedzę, ale również zaszczepić fascynację programowaniem wśród uczniów. Widząc ich rozwój, byłem dumny z efektów naszej pracy.<br><br>Dodatkowo, zdobyłem 3. miejsce w szkolnym festiwalu talentów technicznych uElektra, co potwierdza moje zaangażowanie i umiejętności w dziedzinie technologii. Jako osoba otwarta na współpracę, chętnie uczestniczę w projektach grupowych, a moje sukcesy są dla mnie dodatkowym impulsem do ciągłego rozwoju. W dążeniu do zostania full-stack developerem, nieustannie poszerzam swoje umiejętności i doświadczenie, aby przyczynić się do dziedziny programowania i technologii.',
  'english': 'I am a second-year student at the School of Mechanical, Electrical, and Electronic Engineering in Toruń, where I am enrolled in the programming technician class. I possess language skills at the B1 level in English, communicate effectively in German, and have recently started learning Norwegian.<br><br>I reside in Brzozówka, in the Toruń district, which not only serves as my place of residence but also provides ample space for pursuing interests beyond school.<br><br>My professional experiences include completing courses under the "Blisko pracodawcy" project, focusing on website development and computer graphics. Additionally, as part of this project, I underwent a summer internship, gaining practical skills and insights into the industry.<br><br>As part of the CodeWeek project, I conducted a two-week introductory JavaScript course for first-year classes. This experience not only allowed me to impart knowledge but also instilled a passion for programming among students. Witnessing their development, I took pride in the outcomes of our efforts.<br><br>Furthermore, I secured the 3rd place in the school`s technical talent festival, uElektra, confirming my dedication and skills in the field of technology. As someone open to collaboration, I eagerly participate in group projects, and my successes serve as additional motivation for continuous development. Striving to become a full-stack developer, I consistently expand my skills and experience to contribute to the field of programming and technology.'
};

const animatedText = document.getElementById('animated-text');
const languageParam = document.body.getAttribute('data-language') || 'english';

function typeWriter() {
  const text = textToWrite[languageParam];
  let i = 0;

  function type() {
    if (i < text.length) {
      animatedText.innerHTML = text.substring(0, i + 1);
      i++;
      setTimeout(type, 30);
    }
  }

  type();
}


typeWriter();
