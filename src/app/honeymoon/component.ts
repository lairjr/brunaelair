import { Component } from '@angular/core';

@Component({
  templateUrl: './page.html'
})
export class HoneyMoonComponent {
  gifts = [
    {
      image: "https://media.bizj.us/view/img/6926112/screen-shot-2014-06-25-at-122653-pm750xx977-550-0-78*750xx750-422-0-0.png",
      title: "Almoço Shake Shack",
      content: "Conteúdo",
      price: "100,00"
    }
  ];
}
