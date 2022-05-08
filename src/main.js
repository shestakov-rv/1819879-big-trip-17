import {render} from './render';
import NewEventButtonView from './view/new-event-button-view';
import TripFilterControlsView from './view/trip-filter-controls-view';
import TripSortControlsView from './view/trip-sort-controls-view';
import TripEventsListPresenter from './presenter/trip-events-list-presenter';

const pageBodyElement = document.querySelector('.page-body');
const pageMainElement = pageBodyElement.querySelector('.page-main');
const tripMainElement = pageBodyElement.querySelector('.trip-main');
const tripFilterContainer = pageBodyElement.querySelector('.trip-controls__filters');
const tripEventsContainer = pageBodyElement.querySelector('.trip-events');

const tripEventsListPresenter = new TripEventsListPresenter();

render(new TripFilterControlsView(), tripFilterContainer);
render(new NewEventButtonView(), tripMainElement);
render(new TripSortControlsView(), tripEventsContainer);


tripEventsListPresenter.init(pageMainElement);

