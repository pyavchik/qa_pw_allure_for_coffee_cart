import { test } from '../../../_fixtures/fixtures';
import { totalPriceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';
import { allure } from 'allure-playwright';
import { Severity } from 'allure-js-commons';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`Total cost is updated after clicking the ${coffee} cup`, async ({
    menuPage,
  }) => {
    await allure.parentSuite('Customer Site');
    await allure.suite('Menu');
    await allure.subSuite('Add Coffee');
    await allure.severity(Severity.NORMAL);
    await allure.epic('Coffee Cart Application');
    await allure.feature('Menu');
    await allure.story('Customer can add coffee cups and see updated total');
    const totalPriceStr = totalPriceFormatStr(price);

    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);

    await menuPage.assertTotalCheckoutContainsValue(totalPriceStr);
  });
});
