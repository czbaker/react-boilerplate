import * as React from 'react';
import { Header, Container } from 'semantic-ui-react';

const styles = {
    margin: '15px'
};

export const SiteHeader = () => (
    <Container>
        <Header as="h1" inverted style={styles}>React/Typescript Boilerplate</Header>
    </Container>
);