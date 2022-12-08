import { getItemTemplate } from './js/getItemTemplate';
import { items as importedItems } from './js/items';
// import { NotifyMessage } from './js/notifyMessage';
let items = importedItems;

const refs = {
  list: document.querySelector('.to-do-list'),
  form: document.querySelector('form'),
  //   modalText: instance.element().querySelector('.modal-text'),
  //   modalButton: instance.element().querySelector('button'),
};
// const notify = new NotifyMessage();

refs.form.addEventListener('submit', handleSubmitForm);
function handleSubmitForm(event) {
  event.preventDefault();
  // notify.info();
  const value = event.target.task.value.trim();
  console.log(value);
  if (value) {
  }
  addCardItem(value);
  render();
  refs.form.reset();
}

function addCardItem(text) {
  const payLoad = {
    text,
    isDone: false,
    // id: uuid.v4(),
    created: new Date(),
  };

  items.push(payLoad);
}

const render = () => {
  const list = items.map(getItemTemplate);

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', list.join(''));
};
