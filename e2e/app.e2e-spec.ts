import { TvebappPage } from './app.po';

describe('tvebapp App', () => {
  let page: TvebappPage;

  beforeEach(() => {
    page = new TvebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
