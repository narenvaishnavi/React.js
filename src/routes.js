import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursePage from './components/courses/CoursePage';
import ProfessionalPage from './components/professional/ProfessionalPage';
import FantasyPage from './components/fantasy/FantasyPage';

export default(
    <Route path="/" component = {App}>
        <IndexRoute component = {HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="courses" component={CoursePage}/>
        <Route path="professional" component={ProfessionalPage}/>
        <Route path="fantasy" component={FantasyPage}/>
    </Route>
);