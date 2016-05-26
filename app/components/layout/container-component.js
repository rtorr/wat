import Ember from 'ember';
import FluxComponent from 'fluxed/mixins/flux-component';
import Store from './Store';

export default Ember.Component.extend(FluxComponent, {
    store: Store,
    actions: {
        addOne() {
            return this.dispatcher.dispatch({
                type: 'ADD_ONE',
                data: this.getStateFromStores().count + 1
            });
        }
    }
});
