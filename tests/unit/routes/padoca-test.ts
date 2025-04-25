import { module, test } from 'qunit';
import { setupTest } from 'demo-app/tests/helpers';

module('Unit | Route | padoca', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:padoca');
    assert.ok(route);
  });
});
