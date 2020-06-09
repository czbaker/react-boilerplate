import * as React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useStore } from '../store/context';

// Pages
interface Page {
    name: string
    path: string
};

const pages: Array<Page> = [
    { name: 'home', path: '/'},
    { name: 'counter', path: '/counter'},
    { name: 'about', path: '/about'},
];

export const SiteMenu = () => {

    // Hooks!
    const history = useHistory();
    const store = useStore();

    const handleClick = (id: number) => {
        const { name, path } = pages[id];
        history.push(path);
        store.nav.setActive(name)
    };

    return (
        <Menu inverted borderless className="siteMenu" size="small">
            <Container>
                <Menu.Item name='home' onClick={() => { handleClick(0); }}>
                    Home
                </Menu.Item>
                <Menu.Item name='counter' onClick={() => { handleClick(1); }}>
                    Counter
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item name='home' onClick={() => { handleClick(2); }}>
                        About
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    )
};