import { test } from '../../_fixtures/fixtures';
import { allure } from 'allure-playwright';
import { Severity } from 'allure-js-commons';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.parentSuite('Admin Site');
  await allure.suite('Edit Menu');
  await allure.subSuite('Add coffee to total');
  await allure.severity(Severity.NORMAL);
  await allure.epic('Coffee Cart Application');
  await allure.feature('Admin Menu Management');
  await allure.story('Admin can add new coffee to the menu');
  // This is a fake example test.
});
