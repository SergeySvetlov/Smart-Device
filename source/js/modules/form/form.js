const MATRIX_DEF = '+7(___) ___-__-__';

const phoneInputs = document.querySelectorAll('[data-phone-pattern]');
const form = document.querySelector('form');
const text = document.querySelectorAll('[text]');
const approval = document.querySelector('[approval]');

const checkForm = () => {
  if (form !== null && text !== null && approval !== null) {
    form.addEventListener('submit', function (event) {
      if (approval.checked === false) {
        text.forEach((el) => {
          el.classList.add('error');
        });
        event.preventDefault();
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', function () {
  let eventCalllback = function (e) {
    let el = e.target;
    let pattern = el.dataset.phonePattern;
    let matrix = pattern ? pattern : MATRIX_DEF;
    let i = 0;
    let def = matrix.replace(/\D/g, '');
    let val = e.target.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });
  };
  if (phoneInputs !== null) {
    for (let elem of phoneInputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
      }
    }
  }
});

export {checkForm};
