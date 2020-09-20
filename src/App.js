import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BadgesPage from './pages/Badges/BadgesPage';
import BadgeNewPage from './pages/BadgeNew/BadgeNewPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import BadgeDetailsContainer from './pages/BadgeDetails/BadgeDetailsContainer';
import HomePage from './pages/Home/HomePage';
import BadgeEditPage from './pages/BadgeEdit/BadgeEditPage';

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component= { HomePage } />
                <Route exact path='/badges' component= { BadgesPage } />
                <Route exact path='/badges/new' component= { BadgeNewPage } />
                <Route exact path='/badges/:badgeId' component= {BadgeDetailsContainer} />
                <Route exact path='/badges/:badgeId/edit' component= { BadgeEditPage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </Layout>    
    </BrowserRouter>
  );
};

export default App;
