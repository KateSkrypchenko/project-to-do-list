export const getItemTemplate = ({ text, isDone, id }) =>
  `<li class="to-do-list__item" data-id=${id}>
    <div class="to-do-list-wrap">
      <input class="to-do-list__input" type="checkbox" name="checked" data-action="toggle" ${
        isDone ? 'checked' : ''
      }/>
      <p class="to-do-list__text">${text}</p>
    </div>
    <div class="box-btn">
      <button class="to-do-list__view" type="button" data-action="view">View</button>
      <button class="to-do-list__btn" type="button" data-action="delete">X</button>
    </div>
  </li>`;
