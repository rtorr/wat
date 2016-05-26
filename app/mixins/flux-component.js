import Ember from 'ember';
import Welp from 'npm:welp';

export default Ember.Mixin.create({
    init(...args) {
        this._super(args);
        if (!this.store) {
            throw new Error('You must have a stores array property');
        }
        this.data = this.getStateFromStores();
        this.dispatcher = Welp.WelpDispatcher;
        this.store.addChangeListener(this.handleStoresChanged.bind(this));
    },
    getStateFromStores() {
        return this.store.getDataStructure().toJS();
    },
    handleStoresChanged: function handleStoresChanged() {
        return this.set('data', this.getStateFromStores());
    }
});
