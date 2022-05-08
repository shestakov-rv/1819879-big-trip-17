import {render} from '../render';
import TripEventView from '../view/trip-event-view';
import TripEventsListView from '../view/trip-events-list-view';
import TripEventEditView from '../view/trip-event-edit-view';
import TripEventCreateView from '../view/trip-event-create-view';

export default class TripEventsListPresenter {
  tripEventsList = new TripEventsListView();
  tripEventsListContainer;

  init(pageMainContainer) {
    this.tripEventsListContainer = pageMainContainer.querySelector('.trip-events');

    render(this.tripEventsList, this.tripEventsListContainer);

    render(new TripEventEditView(), this.tripEventsList.getElement());
    for (let i = 0; i < 3; i++) {
      render(new TripEventView(), this.tripEventsList.getElement());
    }
    render(new TripEventCreateView(), this.tripEventsList.getElement());
  }
}
