const links = document.querySelector('.footer__links-container');
const contacts = document.querySelector('.footer__contacts-container');
const linksButton = document.querySelector('[data-open-links]');
const contactsButton = document.querySelector('[data-open-contacts]');
const paragraph = document.querySelector('#paragraph');
const detailsButton = document.querySelector('[data-open-full]');

const initLinks = () => {
  links.classList.toggle('is-open');
};

const initContacts = () => {
  contacts.classList.toggle('is-open');
};

const initDetails = () => {
  if (detailsButton.textContent === 'ПОДРОБНЕЕ') {
    detailsButton.textContent = 'СВЕРНУТЬ';
  } else {
    detailsButton.textContent = 'ПОДРОБНЕЕ';
  }
  paragraph.classList.toggle('is-open');
};

linksButton.addEventListener('click', initLinks);
contactsButton.addEventListener('click', initContacts);
detailsButton.addEventListener('click', initDetails);

export {initLinks, initContacts};
