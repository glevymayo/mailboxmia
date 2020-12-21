import React from 'react';
import './App.css';
import Home from './components/home/home.component'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { LoginAdmin } from './pages/admin/login/login-admin.component';
import { ViewPlans } from './pages/admin/plans/view-plans.component';
import { NewPlan } from './pages/admin/plans/new-plan.component';
import { createBrowserHistory } from "history";
import { EditPlan } from './pages/admin/plans/edit-plan.component';
import { HomepageAdmin } from './pages/admin/homepage/homepage-admin.components';
import { AdminLayout } from './pages/layouts/admin-layout.component';
import { SignIn } from './pages/app/sign-in/sign-in.component';
import { SignUp } from './pages/app/sign-up/sign-up.component';
import Main from './pages/web/main.component';
import { WebLayout } from './pages/layouts/web-layout.components';

const App = () => {
  const history = createBrowserHistory();
  return <div>
    <Router history={history}>
      <Switch>
        <Route path='/admin' exact component={LoginAdmin} />
        <Route path='/web/:path?' exact>
          <WebLayout>
            <Switch>
              <Route path='/web/main' exact component={Main} />
            </Switch>
          </WebLayout>
        </Route>
        <Route path='/admin/:path?' exact>
          <AdminLayout>
            <Switch>
              <Route path='/admin/home' exact component={HomepageAdmin} />
              <Route path='/admin/plans/' exact component={ViewPlans} />
              <Route path='/admin/plans/new' exact component={NewPlan} />
              <Route path='/admin/plans/edit/:id' component={EditPlan} />
            </Switch>
          </AdminLayout>
        </Route>
        <Route>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/app/signin' component={SignIn} />
            <Route path='/app/signup' component={SignUp} />
          </Switch>
        </Route>
      </Switch>
    </Router>
  </div>

}

export default App;
