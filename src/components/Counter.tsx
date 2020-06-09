import * as React from 'react';

import { CounterDisplay } from './counter/CounterDisplay';
import { CounterControls } from './counter/CounterControls';

export const Counter = () => (
    <div>
        <CounterDisplay />
        <CounterControls />
    </div>
);
