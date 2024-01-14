const textToWrite = {
  'polish': 'Mam 15 lat i jestem uczniem drugiej klasy ZSMEiE w Toruniu, gdzie uczęszczam do klasy technik-programista. <br><br>Mieszkam w Brzozówce, w powiecie toruńskim, co dla mnie nie tylko oznacza miejsce zamieszkania, ale także przestrzeń do rozwoju zainteresowań poza szkołą. <br><br>Jako osoba otwarta na współpracę, chętnie uczestniczę w projektach grupowych, a moje sukcesy są dla mnie dodatkowym impulsem do ciągłego rozwoju. W dążeniu do zostania full-stack developerem, nieustannie poszerzam swoje umiejętności i doświadczenie, aby przyczynić się do dziedziny programowania i technologii.',
  'english': 'I am a 15-years-old second-year student at the ZSMEiE in Toruń, where I attend the programming technician class. <br><br>I reside in Brzozówka, in the Toruń district, which not only signifies my place of residence but also provides a space for the development of interests beyond school. <br><br>As someone open to collaboration, I willingly participate in group projects, and my successes serve as an additional incentive for continuous development. In my pursuit of becoming a full-stack developer, I constantly broaden my skills and experience to contribute to the field of programming and technology.'
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
