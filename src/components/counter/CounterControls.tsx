import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { useStore } from '../../store/context';

export const CounterControls = () => {

    // MobX Hook
    const store = useStore();

    const handleInc = () => {
        store.counter.increment();
    }

    const handleDec = () => {
        store.counter.decrement();
    }

    const handleIncNum = () => {
        store.counter.incByAmount(5);
    }

    const handleDecNum = () => {
        store.counter.decByAmount(5);
    }

    return (
        <div>
            <Button onClick={handleDecNum}>-5</Button>
            <Button onClick={handleDec}>-1</Button>
            <Button onClick={handleInc}>+1</Button>
            <Button onClick={handleIncNum}>+5</Button>
        </div>
    );
}