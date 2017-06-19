import { C2designPage } from './app.po';

describe('c2design App', () => {
  let page: C2designPage;

  beforeEach(() => {
    page = new C2designPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
