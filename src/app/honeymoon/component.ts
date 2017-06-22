import { Component } from '@angular/core';

@Component({
  templateUrl: './page.html'
})
export class HoneyMoonComponent {
  pagSeguroPrices = {
    100: 'FB3CF8072B2B1C0664268F8D45295F7C',
    200: '830AD1CEECEC9D9884C7AFB48A151167',
    350: '4E4FB1A3404060D664E26FB9F53B19A5',
    600: 'D87BBF39E7E72EE554AD9F926174EE72'
  }
  gifts = [
    {
      image: "http://seoulspace.co.kr/wp-content/uploads/2016/07/shake-shack.jpg",
      title: "Almoço Shake Shack",
      content: "Aquele hamburgão que você respeita. E a batata? Com molho de cheddar pra fechar com chave de ouro o combo do melhor fast food da gringa.",
      price: "100,00",
      pagSeguroValue: this.pagSeguroPrices['100']
    },
    {
      image: "https://media-cdn.tripadvisor.com/media/photo-s/09/64/03/b9/ristorante-al-mare.jpg",
      title: "Jantar no al Mare",
      content: "Uma gostasa comida italiana à beira do oceano pacífico, no píer de Santa Monica.",
      price: "100,00",
      pagSeguroValue: this.pagSeguroPrices['100']
    },
    {
      image: "https://3.bp.blogspot.com/-xZQWz9fbhxw/VrA37VDYqAI/AAAAAAAAAoc/mBT4oK7tm0w/s640/comparadores-aluguel-de-carro.jpg",
      title: "Alguél de carro",
      content: "Metade da trip vai rolar de carro. Vamos fazer a Big Sur, de San Francisco a Los Angeles de caranga.",
      price: "200,00",
      pagSeguroValue: this.pagSeguroPrices['200']
    },
    {
      image: "https://s-media-cache-ak0.pinimg.com/originals/57/fc/36/57fc36084cdf11355d1e08929a703dc4.jpg",
      title: "Ingresso roda gigante em Santa Mônica",
      content: "Roda Gigante não é bem o brinquedo preferido do casal. Mas quando ele está em um píer lindo, com aquele pôr-do-sol, vale a pena!",
      price: "100,00",
      pagSeguroValue: this.pagSeguroPrices['100']
    },
    {
      image: "http://www.westland.net/venice/images/birdseye.jpg",
      title: "Drinks na praia de Venice Beach",
      content: "O casal bom de copo não vai sair de Venice Beach sem provar os drinks famosos da Califa.",
      price: "100,00",
      pagSeguroValue: this.pagSeguroPrices['100']
    },
    {
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/af/33/3e/diagon-alley.jpg",
      title: "Tour no Studios da Warner",
      content: "O que, eu ouvi estúdio do Friends? O noivo pira!",
      price: "100,00",
      pagSeguroValue: this.pagSeguroPrices['100']
    },
    {
      image: "http://img0.svcdn.lasvegas.com/v3/cache/lasvegas/32EDBB89E244184BBBD471B36DCB28A4.jpg",
      title: "Ingresso Cirque du Soeil",
      content: "Já fomos a alguns espetáculos da franquia e é sempre incrível. Imagina em Vegas, com picadeiro fixo? Altas expectativas.",
      price: "350,00",
      pagSeguroValue: this.pagSeguroPrices['350']
    },
    {
      image: "http://www.cplosangeles.com/photogallery/large/hotel/los-angeles-california-hotel-exterior-building.jpg",
      title: "Hotel Los Angeles",
      content: "A viagem termina em Hollywood. A ideia é explorar algum hotel com vista para o letreiro, quem sabe! =)",
      price: "100,00",
      pagSeguroValue: this.pagSeguroPrices['100']
    },
    {
      image: "http://www.bestourism.com/img/items/big/91/The-United-States-of-America-_Universal-Studio-in-Los-Angeles-California_156.jpg",
      title: "Ingresso Parque da Universal",
      content: "Quase não curtimos parques, né?! Talvez essa seja a maior expectativa da noiva: ver Hogwarts de pertinho de novo.",
      price: "600,00",
      pagSeguroValue: this.pagSeguroPrices['600']
    },
    {
      image: "http://www.magnoliabakery.com/wp-content/uploads/2013/12/Magnolia-Bakery-Dubai-Store.jpg",
      title: "Café na Magnolia Bakery",
      content: "Os melhores cupcakes da América. “Moça, me vê uma caixa de Red Velvet, por favor!”",
      price: "100,00",
      pagSeguroValue: this.pagSeguroPrices['100']
    },
    {
      image: "http://adc-usa.com/wp-content/uploads/2013/10/TCF-HB-3520-copy.jpg",
      title: "Jantar no Cheesecake Factory",
      content: "O restaurante é para garantida toda vez na terra do Tio Sam. De entrada, o bolinho de batata. Depois, aquela carbonara para compartilhar.",
      price: "100,00",
      pagSeguroValue: this.pagSeguroPrices['100']
    },
    {
      image: "http://cdn.mntm.me/24/e6/d3/The-Top-Five-Las-Vegas-Family-Hotels-24e6d30f4e324ef6b921588fff4b0e87.jpg",
      title: "Hotel Las Vegas",
      content: "A terra dos hotéis incríveis. A ideia é ficarmos bem centralizados, com a opção de retorno imediato em caso de “perda total” com os drinks de Vegas.",
      price: "100,00",
      pagSeguroValue: this.pagSeguroPrices['100']
    }
  ];
}
