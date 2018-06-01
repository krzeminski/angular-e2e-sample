import { browser } from 'protractor';
import { HeadTestingPage } from './head.po';

describe('angular-e2e-sample head testing', () => {
  let page: HeadTestingPage;

  beforeEach(() => {
    page = new HeadTestingPage();
  });

  it('should display banner content correctly', () => {
    page.navitateTo();

    expect(page.getBannerTitleText()).toEqual('Donation');
  });
});
