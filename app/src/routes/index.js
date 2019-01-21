import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home'
import ContentPage from '../components/content-page'

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/resume' render={(props) => <ContentPage {...props} content={'resume'}/>}/>
          <Route exact path='/creative-work' render={(props) => <ContentPage {...props} content={'creative-work'}/>}/>
          <Route exact path='/projects' render={(props) => <ContentPage {...props} content={'projects'}/>}/>
          {/* <Route exact component={NotFound} /> */}
        </Switch>
      </Router>
    )
  }
}
export default AppRouter;
