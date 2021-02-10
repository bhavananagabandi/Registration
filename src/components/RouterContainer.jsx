import { Route, Switch } from 'react-router';
import { renderComponent } from '../utils';
import { connect } from 'react-redux';
import { Welcome } from './Welcome';


const buildRoutes = (routes) => {
  return Object.values(routes).map(route => {
   return <Route path = {`/${route}`} component = {()=> renderComponent(route)}/>
  })
};

const RouterContainer = (props) => {
  const routes = buildRoutes(props.routes);
    return (
        <Switch>
          <Route path="/" exact component={() => <Welcome />} />
          {routes}
        </Switch>
    );
};

const mapStateToProps = (state) => {
  return { routes : state.routes };
};

export default connect(mapStateToProps, {})(RouterContainer);