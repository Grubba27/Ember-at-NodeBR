import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'demo-app/tests/helpers';

module('Acceptance | padoca', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /padoca', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
  });

  test('listing produtos', async function (assert) {
    await visit('/');

    assert.dom('h1').hasText('Padoca');
    assert.dom('ul').exists();
    assert.dom('li').exists();
    assert.dom('li').includesText('Pão de Queijo');
  });
});
