import { NgRpgPage } from './app.po';

describe('ng-rpg App', function() {
  let page: NgRpgPage;

  beforeEach(() => {
    page = new NgRpgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
