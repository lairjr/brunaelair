import { BrunaELairPage } from './app.po';

describe('bruna-elair App', () => {
  let page: BrunaELairPage;

  beforeEach(() => {
    page = new BrunaELairPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
