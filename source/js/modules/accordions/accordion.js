const links = document.querySelector('.footer__links-container');
const contacts = document.querySelector('.footer__contacts-container');
const linksButton = document.querySelector('[data-open-links]');
const contactsButton = document.querySelector('[data-open-contacts]');

const initLinks = () => {
  links.classList.toggle('is-open');
};

const initContacts = () => {
  contacts.classList.toggle('is-open');
};

linksButton.addEventListener('click', initLinks);
contactsButton.addEventListener('click', initContacts);

export {initLinks, initContacts};
