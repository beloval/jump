import { MyAppNewPage } from './app.po';

describe('JUMP', function() {
  let page: MyAppNewPage;

  beforeEach(() => {
    page = new MyAppNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
