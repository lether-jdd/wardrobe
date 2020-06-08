import React, { Suspense} from 'react'
// import Home from './views/home.tsx'
const Home = React.lazy(() => import('./views/home.tsx'))
// import Clothes from './views/clothes.tsx'
const Clothes = React.lazy(() => import('./views/clothes.tsx'))
// BrowserRouter as Router, 
const WaterFall = React.lazy(() => import('./views/waterFall.tsx'))
const Socket = React.lazy(() => import('./views/socket.tsx'))
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
// import load1 from 'bundle-loader?lazy&name=app-[name]!../test.bundle.tsx' 
import load1 from './test.bundle.jsx'
class App extends React.Component {
  render() {
    load1((c) => {
      console.log(c.default())
    })
    return (
      <Router>
        <Switch>
          <Route path="/clothes" >
            <Suspense
              // maxDuration={500}
              fallback={<div>抱歉，请耐心等待 Loading...</div>}
            >
              <Clothes></Clothes>
            </Suspense>
          </Route>
          <Route path="/cc" >
            <Suspense
              // maxDuration={500}
              fallback={<div>抱歉，请耐心等待 Loading...</div>}
            >
              <Home></Home>
            </Suspense>
          </Route>
          <Route path="/waterfall" >
            <Suspense
              // maxDuration={500}
              fallback={<div>抱歉，请耐心等待 Loading...</div>}
            >
              <WaterFall></WaterFall>
            </Suspense>
          </Route>
          <Route path="/socket" >
            <Suspense
              // maxDuration={500}
              fallback={<div>抱歉，请耐心等待 Loading...</div>}
            >
              <Socket></Socket>
            </Suspense>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App