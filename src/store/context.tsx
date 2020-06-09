import * as React from 'react';
import { CounterStore, NavStore } from './stores';

export const storesContext = React.createContext({
    counter: new CounterStore(),
    nav: new NavStore()
});

export const useStore = () => {
    const store = React.useContext(storesContext);
    if (!store) {
        throw new Error(`useStore must be used within a Provider!`);
    }
    return store;
}