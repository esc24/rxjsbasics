import { RxjslearningPage } from './app.po';

describe('rxjslearning App', () => {
  let page: RxjslearningPage;

  beforeEach(() => {
    page = new RxjslearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
