import { NewtodoPage } from './app.po';

describe('newtodo App', () => {
  let page: NewtodoPage;

  beforeEach(() => {
    page = new NewtodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
