// import api from "./services/apiService";

// api.countries().then(res => console.log(res));
// api.cities().then(res => console.log(res));
import '../css/style.css';
import './plugins'
import config from "./config/apiConfig";
import locations from "./store/locations";
import formUI from './views/form';
import currencyUI from './views/currency';
import ticketsUI from './views/tickets';
import favorites from './store/favorites';
import favUI from './views/favUI';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
  const form = formUI.form;
  favorites.favInit();
  const favButton = document.querySelectorAll('.add-favorite');

  // Events
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  document.addEventListener("click", function (e) {
    const target = e.target;
    if (target.classList.contains('add-favorite')) {
      const ticket_id = target.dataset.ticketid;
      favorites.addToFavorites(ticket_id, locations.lastSearch);
    }
  })

  document.addEventListener("click", function (e) {
    const target = e.target;
    if (target.classList.contains('delete-favorite')) {
      const ticket_id = target.dataset.ticketid;
      favorites.removeFavorite(ticket_id);
    }
  })


  //Handlers
  async function initApp() {
    await locations.init();
    formUI.setAutocompleteData(locations.shortCitiesList);
  }

  async function onFormSubmit() {
    // собрать данные из инпутов
    const origin = locations.getCityCodeByKey(formUI.originValue);
    const destination = locations.getCityCodeByKey(formUI.destinationValue);
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;
    const currency = currencyUI.currencyValue;
    const token = config.token;
    // CODE, CODE , DATE, DATE
    console.log(origin, destination, depart_date, return_date);
    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency
    });
    // location.fetchTickets();
    ticketsUI.renderTickets(locations.lastSearch);

  }
});