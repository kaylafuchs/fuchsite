import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/tiles'
import ContentPage from '../components/content-page'
import ScrollToTop from 'react-router-scroll-top'

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/resume' render={(props) => <ContentPage {...props} content={'resume'}/>}/>
            <Route exact path='/creative-work' render={(props) => <ContentPage {...props} content={'creative-work'}/>}/>
            <Route exact path='/projects' render={(props) => <ContentPage {...props} content={'projects'}/>}/>
            <Route exact component={Home} />
          </Switch>
        </ScrollToTop>
      </Router>
    )
  }
}
export default AppRouter;
