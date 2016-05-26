import Ember from 'ember';
import FluxComponent from 'fluxed/mixins/flux-component';

export default Ember.Component.extend(FluxComponent, {
    stores: [{ test: 1 }],
    init(...args) {
        this._super(args);
        this.count = 0;
        setInterval(() => {
            this.set('count', this.get('count') + 1);
            // console.log(this.count);
        }, 1000);
    },
    // willRender() {
    //     // console.log('willRender', this.count);
    //     // this.set('count', 2);
    // }
});
