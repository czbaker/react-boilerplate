import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'mobx-react/batchingForReactDom';

// App mount point
import { App } from './components/App';

// CSS
import 'semantic-ui-less/semantic.less';
import './app.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept(() => {});
    module.hot.dispose(() => {});
}