import { NgxMozLayouterDemoPage } from './app.po';

describe('ngx-moz-layouter-demo App', () => {
  let page: NgxMozLayouterDemoPage;

  beforeEach(() => {
    page = new NgxMozLayouterDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
