import {createElement} from '../render';

const createNewEventButtonTemplate = () =>
  `<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow"
    type="button">
    New event
  </button>`;

export default class NewEventButtonView {
  element;

  getTemplate() {
    return createNewEventButtonTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

