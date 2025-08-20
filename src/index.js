import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'
import PlaceholderHome from './views/page-home'
import PlaceholderAbout from './views/page-about'
import PlaceholderBlogs from './views/page-blogs'
import NewBlogPage from './views/page-blogs-new'
import BlogsDetailPage from './views/page-blogs-detail'
import PlaceholderCommunity from './views/page-community'
import PlaceholderTest from './views/page-test'
import PlaceholderChat from './views/page-chat'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={PlaceholderHome} />
        <Route exact path="/about" component={PlaceholderAbout} />
        <Route exact path="/blogs" component={PlaceholderBlogs} />
        <Route exact path="/blogs/new" component={NewBlogPage} />
        <Route exact path="/blogs/:id" component={BlogsDetailPage} />
        <Route exact path="/community" component={PlaceholderCommunity} />
        <Route exact path="/test" component={PlaceholderTest} />
        <Route exact path="/chat" component={PlaceholderChat} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
