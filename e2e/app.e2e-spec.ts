import { NewtodoPage } from './app.po';

describe('newtodo App', () => {
  let page: NewtodoPage;

  beforeEach(() => {
    page = new NewtodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
