import { test } from '../../../_fixtures/fixtures';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';
import { allure } from 'allure-playwright';
import { Severity } from 'allure-js-commons';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} cup has correct cost`, async ({ menuPage }) => {
    await allure.parentSuite('Customer Site');
    await allure.suite('Menu');
    await allure.subSuite('View Coffee');
    await allure.severity(Severity.NORMAL);
    await allure.epic('Coffee Cart Application');
    await allure.feature('Menu');
    await allure.story('Customer can view correct cost per coffee');
    const priceStr = priceFormatStr(price);

    await menuPage.open();

    await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
});
