import favUI from '../views/favUI';

class Favorites {
  constructor() {
    // this.ticket_id = ticket.ticket_id;
    this.favorites = [];
  }

  favInit() {
    console.log(this.favorites);

    if (Object.keys(this.favorites).length === 0) {
      favUI.clearContainer();
      favUI.showEmptyFavMsg();
    }
  }



  addToFavorites(ticket_id, lastLocations) {
    if (this.favorites.some(ticket => ticket.ticket_id === ticket_id)) {
      M.toast({ html: 'Ticket already in favorites!' });
      return;
    }
    this.favorites.push(lastLocations.find(ticket => ticket.ticket_id === ticket_id));
    favUI.renderFavorites(this.favorites);
    M.toast({ html: 'Ticket added to favorites!' });
  }

  removeFavorite(ticket_id) {
    this.favorites = this.favorites.filter((ticket) => ticket.ticket_id !== ticket_id);
    favUI.renderFavorites(this.favorites);
    M.toast({ html: 'Ticket removed to favorites!' });
  }

}

const favorites = new Favorites();

export default favorites;