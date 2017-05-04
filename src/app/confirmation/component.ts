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
  usedEmail = false;
  tempInfo = {
    key: '',
    name: '',
    guests: []
  };
  isUpdateRequest = false;
  errorMessage = '';
  validateEmail(email) {
    this.usedEmail = false;
    let guests = this.af.database.list('/guests', { preserveSnapshot: true });
    guests.subscribe(snapshots => {
      if (!this.isUpdateRequest) {
        snapshots.forEach(snapshot => {
          let guestData = snapshot.val();
          if (guestData.email === email) {
            this.usedEmail = true;
            this.tempInfo = guestData;
            this.tempInfo.key = snapshot.key;
          }
        });
      }
    });
  }
  save(formInfo) {
    this.validaInfo(formInfo);

    if (!this.errorMessage) {
      if (this.isUpdateRequest) {
        this.guestsDb.update(this.tempInfo.key, formInfo);
      } else {
        this.isUpdateRequest = true;
        this.guestsDb.push(formInfo);
      }
      this.saveInfo = 'Obrigado, aguardamos você!';
    }
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
  onEmailBlur(email) {
    this.validateEmail(email);
  }
  useTempData() {
    this.usedEmail = false;
    this.isUpdateRequest = true;
    this.info.name = this.tempInfo.name;
    this.info.guests = (this.tempInfo.guests.length > 0) ? this.tempInfo.guests : [];
  }
  validaInfo(info) {
    if (!info.name || !info.email) {
      this.errorMessage = 'Nome e e-mail são obrigatórios.';
    } else {
      this.errorMessage = '';
    }
  }
  clear() {
    this.info = {
      name: '',
      email: '',
      guests: [
      ],
      newGuest: ''
    };
    this.saveInfo = '';
    this.usedEmail = false;
    this.tempInfo = {
      key: '',
      name: '',
      guests: []
    };
    this.isUpdateRequest = false;
    this.errorMessage = '';
  }
}
