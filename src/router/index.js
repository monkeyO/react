import React from 'react';
import {Route,HashRouter} from 'react-router-dom';
import Loadable from 'react-loadable';
import Frame from '../App';
const Loading = () => <div>Loading...</div>
const App = Loadable({
    loader: () => import('../App'),
    loading: Loading,
})
const Content = Loadable({
    loader: () => import('../components/container/content'),
    loading: Loading,
})
const Board = Loadable({
    loader: () => import('../components/board'),
    loading: Loading,
})
const Photo = Loadable({
    loader: () => import('../components/photo'),
    loading: Loading,
})
const Know = Loadable({
    loader: () => import('../components/know'),
    loading: Loading,
})
const Person = Loadable({
    loader: () => import('../components/person'),
    loading: Loading,
})

const routes = (
    <HashRouter>
        <Frame component={App}>
            <Route path="/" component={Content} exact />
            <Route path="/board" component={Board}/>
            <Route path="/photo" component={Photo} />
            <Route path="/know" component={Know}/>
            <Route path="/person" component={Person} />
        </Frame>
    </HashRouter>
)
export default routes
