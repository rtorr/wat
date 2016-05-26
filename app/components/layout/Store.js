import Welp from 'npm:welp';

const LayoutStore = new Welp.WelpStore(
    { count: 0 },
    action => {
        console.log(action);
        switch (action.type) {
        case 'ADD_ONE':
            return LayoutStore.replace(LayoutStore.data().set('count', action.data));
        default:
            return LayoutStore;
        }
    }
);

export default LayoutStore;
