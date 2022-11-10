const windowSize = document.documentElement.clientWidth;
const feedbackButton = document.querySelector('[data-open-modal]');

const editText = () => {
  if (windowSize <= '767') {
    feedbackButton.textContent = 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ';
  } else {
    feedbackButton.textContent = 'ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ';
  }
};

export {editText};
