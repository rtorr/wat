import Ember from 'ember';
import FluxComponentMixin from 'fluxed/mixins/flux-component';
import { module, test } from 'qunit';

module('Unit | Mixin | flux component');

// Replace this with your real tests.
test('it works', function(assert) {
  let FluxComponentObject = Ember.Object.extend(FluxComponentMixin);
  let subject = FluxComponentObject.create();
  assert.ok(subject);
});
