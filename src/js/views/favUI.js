import currencyUI from "./currency";
class FavUI {
  constructor() {
    this.container = document.getElementById('dropdown1');
  }

  renderFavorites(tickets) {
    this.clearContainer();
    if (!tickets.length) {
      this.showEmptyFavMsg();
      return;
    }
    let fragment = '';
    const currency = currencyUI.getCurrencySymbol();
    tickets.forEach(ticket => {
      const template = FavUI.ticketTemplate(ticket, currency);
      fragment += template;
    });
    this.container.insertAdjacentHTML('afterbegin', fragment);
  }

  clearContainer() {
    this.container.innerHTML = '';
  }

  showEmptyFavMsg() {
    const template = FavUI.emptyFavTemplate();
    this.container.insertAdjacentHTML('afterbegin', template);
  }

  static emptyFavTemplate() {
    return `
    <div class="tickets-empty-res-msg">
      Favorite tickets not found!
    </div>
    `;
  }

  static ticketTemplate(ticket, currency) {
    return `
      <div class="favorite-item  d-flex align-items-start" data-ticketID="${ticket.ticket_id}">
        <img src="${ticket.airline_logo}" class="favorite-item-airline-img" />
        <div class="favorite-item-info d-flex flex-column">
          <div class="favorite-item-destination d-flex align-items-center" >
            <div class="d-flex align-items-center mr-auto">
              <span class="favorite-item-city">${ticket.origin_name}</span>
              <i class="medium material-icons">flight_takeoff</i>
            </div>
            <div class="d-flex align-items-center">
              <i class="medium material-icons">flight_land</i>
              <span class="favorite-item-city">${ticket.destination_name}</span>
            </div>
          </div>
          <div class="ticket-time-price d-flex align-items-center">
            <span class="ticket-time-departure">${ticket.departure_at}</span>
            <span class="ticket-price ml-auto">${ticket.price} ${currency}</span>
          </div>
          <div class="ticket-additional-info">
            <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
            <span class="ticket-flight-number">Номер рейса: ${ticket.flight_number}</span>
          </div>
          <a class="waves-effect waves-light btn-small pink darken-3 delete-favorite ml-auto" data-ticketID="${ticket.ticket_id}">Delete</a>
        </div>
      </div>
    `;
  }
}

const favUI = new FavUI();

export default favUI;