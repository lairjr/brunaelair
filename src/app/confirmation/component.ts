import { Component } from '@angular/core';

@Component({
  templateUrl: './page.html'
})
export class ConfirmationComponent {
  info = {
    name: '',
    email: '',
    guests: [
    ],
    newGuest: ''
  };
  saveInfo = '';
  save(formInfo) {
    this.saveInfo = 'Obrigado, aguardamos você!';
  }
  addGuest(newGuest) {
    this.info.guests.push(newGuest);
    this.info.newGuest = '';
  }
  removeGuest(guestName) {
    const index = this.info.guests.indexOf(guestName, 0);
    if (index > -1) {
       this.info.guests.splice(index, 1);
    }
  }
}
