import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import {
    ROUTE_HOME,
    ROUTE_ARTICLE_LIST,
    ROUTE_ARTICLE_CREATE,
    ROUTE_ARTICLE_EDIT
} from '../../constants';
import ArticleList from '../../pages/ArticleList/ArticleList';
import ArticleCreate from '../../pages/ArticleCreate/ArticleCreate';
import ArticleEdit from '../../pages/ArticleEdit/ArticleEdit';

function MainContent() {
    return (
        <div className="MainContent mt-3">
            <Container>
                <Switch>
                    <Route path={ ROUTE_ARTICLE_LIST }>
                        <ArticleList />
                    </Route>
                    <Route path={ ROUTE_ARTICLE_CREATE }>
                        <ArticleCreate />
                    </Route>
                    <Route path={ ROUTE_ARTICLE_EDIT }>
                        <ArticleEdit />
                    </Route>
                    <Route path={ ROUTE_HOME }>
                        <Redirect to={ ROUTE_ARTICLE_LIST } />
                    </Route>
                </Switch>
            </Container>
        </div>
    );
}

export default MainContent;
