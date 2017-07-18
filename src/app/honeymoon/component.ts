import { Component } from '@angular/core';

@Component({
  templateUrl: './page.html'
})
export class HoneyMoonComponent {
  pagSeguroPrices = {
    80: '5F4ADF52CCCC975CC40B6FB5DB2C8BC4',
    100: '5CDC4B8E4E4E02F004F79FAE4C250497',
    150: '2530A5566E6E00ACC4798FB532504259',
    200: '830AD1CEECEC9D9884C7AFB48A151167',
    350: '4E4FB1A3404060D664E26FB9F53B19A5'
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
      price: "150,00",
      pagSeguroValue: this.pagSeguroPrices['150']
    },
    {
      image: "https://3.bp.blogspot.com/-xZQWz9fbhxw/VrA37VDYqAI/AAAAAAAAAoc/mBT4oK7tm0w/s640/comparadores-aluguel-de-carro.jpg",
      title: "Aluguel de carro",
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
      price: "150,00",
      pagSeguroValue: this.pagSeguroPrices['150']
    },
    {
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/af/33/3e/diagon-alley.jpg",
      title: "Tour no Studios da Warner",
      content: "O que, eu ouvi estúdio do Friends? O noivo pira!",
      price: "150,00",
      pagSeguroValue: this.pagSeguroPrices['150']
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
      price: "200,00",
      pagSeguroValue: this.pagSeguroPrices['200']
    },
    {
      image: "http://www.bestourism.com/img/items/big/91/The-United-States-of-America-_Universal-Studio-in-Los-Angeles-California_156.jpg",
      title: "Ingresso Parque da Universal",
      content: "Quase não curtimos parques, né?! Talvez essa seja a maior expectativa da noiva: ver Hogwarts de pertinho de novo.",
      price: "350,00",
      pagSeguroValue: this.pagSeguroPrices['350']
    },
    {
      image: "http://www.magnoliabakery.com/wp-content/uploads/2013/12/Magnolia-Bakery-Dubai-Store.jpg",
      title: "Café na Magnolia Bakery",
      content: "Os melhores cupcakes da América. “Moça, me vê uma caixa de Red Velvet, por favor!”",
      price: "80,00",
      pagSeguroValue: this.pagSeguroPrices['80']
    },
    {
      image: "http://adc-usa.com/wp-content/uploads/2013/10/TCF-HB-3520-copy.jpg",
      title: "Jantar no Cheesecake Factory",
      content: "O restaurante é parada obrigatória toda vez na terra do Tio Sam. De entrada, o bolinho de batata. Depois, aquela carbonara para compartilhar.",
      price: "200,00",
      pagSeguroValue: this.pagSeguroPrices['200']
    },
    {
      image: "http://cdn.mntm.me/24/e6/d3/The-Top-Five-Las-Vegas-Family-Hotels-24e6d30f4e324ef6b921588fff4b0e87.jpg",
      title: "Hotel Las Vegas",
      content: "A terra dos hotéis incríveis. A ideia é ficarmos bem centralizados, com a opção de retorno imediato em caso de “perda total” com os drinks de Vegas.",
      price: "200,00",
      pagSeguroValue: this.pagSeguroPrices['200']
    },
    {
      image: "https://www.lasvegasjaunt.com/wp-content/uploads/2014/09/grand-canyon-landing-helicopter-tour.jpg",
      title: "Passeio Grand Canyon",
      content: "A noiva é apaixonada por vistas. Riscar o Grand Canyon da lista de lugares pra visitar na vida é missão dessa viagem.",
      price: "350,00",
      pagSeguroValue: this.pagSeguroPrices['350']
    },
    {
      image: "https://cdn.tutsplus.com/photo/authors/legacy/Jose%20Antunes/2012/12/12/virtualworlds08.jpg",
      title: "Passagem Aérea de Los Angeles para Las Vegas",
      content: "Metade da viagem será de carro, a outra de aéreo. O trajeto ente LA e LV é tiro curto, de uma horinha.",
      price: "200,00",
      pagSeguroValue: this.pagSeguroPrices['200']
    },
    {
      image: "http://1.bp.blogspot.com/-PDK9yDaqGzQ/VGFLS1E-srI/AAAAAAAAeoQ/N3RGT4pe4yQ/s1600/Disneyland-California-Parque-Los-Angeles.jpg",
      title: "Ingresso Disneyland",
      content: "Não podia ser diferente, né? Um dos dias mais esperados pelo casal apaixonado por parques é conhecer mais uma Disney! =)",
      price: "150,00",
      pagSeguroValue: this.pagSeguroPrices['150']
    },
    {
      image: "https://cdnph.upi.com/svc/sv/upi_com/6571500346329/2017/1/96a868bf0161e635401d1daa83df8a0d/Florida-man-on-bail-for-manslaughter-wins-100k-in-Las-Vegas-poker-tournament.jpg",
      title: "Rodada de pôquer em Las Vegas",
      content: "O noivo é das apostas e curte pôquer. Que tal um all in em pleno cassino de Vegas?",
      price: "100,00",
      pagSeguroValue: this.pagSeguroPrices['100']
    },
    {
      image: "http://www.visitwpb.com/wp-content/uploads/2015/06/Sky-Bikes-in-West-Palm-Beach-1.jpg",
      title: "Aluguel de Bicicleta",
      content: "Vai rolar aquele rolê de bike por Venice Beach, ceeerto!",
      price: "80,00",
      pagSeguroValue: this.pagSeguroPrices['80']
    },
    {
      image: "https://s-media-cache-ak0.pinimg.com/736x/1c/ba/eb/1cbaeb55b0b13b55bbf480fbb6d3f43c.jpg",
      title: "Degustação de Cervejas Artesanais em Mission District / San Francisco",
      content: "Oi? Falou em Ceva? Artesanal? Assim o casal não resiste!",
      price: "100,00",
      pagSeguroValue: this.pagSeguroPrices['100']
    }
  ];
}
