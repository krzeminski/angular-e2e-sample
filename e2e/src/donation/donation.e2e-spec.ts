import { browser } from 'protractor';
import { DonationTestingPage } from './donation.po';

describe('angular-e2e-sample donation testing', () => {
  let page: DonationTestingPage;

  beforeEach(() => {
    page = new DonationTestingPage();
  });

  it('should display project image', () => {
    page.navigateTo();

    expect(page.getProjectImage().isDisplayed()).toBeTruthy();
  });

  it('should display total amount of donation equals to zero at first time', () => {
    page.navigateTo();

    expect(page.getTotalAmountDonated()).toEqual('0');
  });

  it ('should display total donated', () => {
    page.navigateTo();

    expect(page.getDescriptionTotalAmountDonated()).toEqual('Total Donated: $ 0');
  });

  it('should display the asking for donation', () => {
    page.navigateTo();

    expect(page.getAskingForDonation()).toContain('Make a donation for this project');
  });

  it('should display a form containing a input for get donation amount and a button to make the donation', () => {
    page.navigateTo();

    expect(page.getFormMakeADonation().isDisplayed()).toBeTruthy();
    expect(page.getInputForAmount().isDisplayed()).toBeTruthy();
    expect(page.getButtonForDonate().isDisplayed()).toBeTruthy();
  });
});
