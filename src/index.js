export const createTag = ({
  tag, id, classes, text,
}) => {
  const obj = document.createElement(tag);
  if (id) obj.setAttribute('id', id);
  if (classes) classes.split(' ').forEach(elem => obj.classList.add(elem));
  if (text) obj.textContent = text;
  return obj;
};

export const resizeTextarea = () => {
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach(textarea => {
    textarea.addEventListener('keyup', () => {
      textarea.style.height = 'auto';
      textarea.style.height = `${20 + textarea.scrollHeight}px`;
    });
  });
};

export const focusSet = (target) => {
  if (target) target.querySelector('input').focus();
};

export const reloadScreen = () => window.location.reload();

export const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);
