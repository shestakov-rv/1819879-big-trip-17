import {createElement} from '../render';

const createTripEventTemplate = () => '<ul class="trip-events__list"></ul>';

export default class TripEventsListView {
  element;

  getTemplate() {
    return createTripEventTemplate();
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
