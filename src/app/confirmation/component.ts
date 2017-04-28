import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  templateUrl: './page.html'
})
export class ConfirmationComponent {
  constructor(public af: AngularFire) {
    this.af.auth.login({ email: 'lairjr@outlook.com', password: 'casamentodev' });
    this.guestsDb = this.af.database.list('/guests', { });
  }
  guestsDb;
  info = {
    name: '',
    email: '',
    guests: [
    ],
    newGuest: ''
  };
  saveInfo = '';
  save(formInfo) {
    this.guestsDb.push(formInfo);
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
