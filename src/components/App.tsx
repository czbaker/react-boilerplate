import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

// MobX Store
import { CounterStore, NavStore } from '../store/stores';
import { storesContext } from '../store/context';

// Pages/Components
import { SiteHeader } from './SiteHeader';
import { SiteMenu } from './SiteMenu';
import { Home } from './Home';
import { Counter } from './Counter';
import { About } from './About';

// Create Provider/Store.
const Provider = storesContext.Provider;
const store = {
    counter: new CounterStore(),
    nav: new NavStore()
};

export const App = () => {
    return (
        <Provider value={store}>
            <Router>
                <SiteHeader />
                <SiteMenu />
                <Container className="siteContainer">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/counter" component={Counter} />
                        <Route path="/about" component={About} />
                    </Switch>
                </Container>
            </Router>
        </Provider>
    )
};