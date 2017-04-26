import { Ex2AppPage } from './app.po';

describe('ex2-app App', function() {
  let page: Ex2AppPage;

  beforeEach(() => {
    page = new Ex2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
