import { Component } from '@angular/core';

@Component({
  templateUrl: './page.html'
})
export class ConfirmationComponent {
  info = {
    name: '',
    email: '',
    guests: [
      ''
    ]
  };
  saveInfo = '';
  addGuest() {
    this.info.guests.push('');
  }
  save() {
    this.saveInfo = 'Obrigado, aguardamos você!';
  }
}
