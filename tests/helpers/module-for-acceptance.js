import { module } from 'qunit';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

export default function (name, options = {}, ...args) {
    module(name, {
        beforeEach() {
            this.application = startApp();

            if (options.beforeEach) {
                options.beforeEach.apply(this, args);
            }
        },

        afterEach() {
            if (options.afterEach) {
                options.afterEach.apply(this, args);
            }

            destroyApp(this.application);
        }
    });
}
