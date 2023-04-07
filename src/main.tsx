import Router, { Route } from 'preact-router';
import { render } from 'preact';

import App from './pages/App';
import Test from './pages/Test';
// import './index.css';

function Main() {
   return (
      <Router>
         <Route path="/" component={App} />
         <Route path="/test" component={Test} />
      </Router>
   );
}

render(<Main />, document.body);
