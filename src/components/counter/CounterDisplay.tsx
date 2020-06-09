import * as React from 'react';
import { Header } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import { useStore } from '../../store/context';

export const CounterDisplay = observer(() => {

    const store = useStore();

    return (
        <Header as="h1" inverted>
            Counter: {store.counter.counter}
        </Header>
    );

});