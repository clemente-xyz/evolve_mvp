import { withApollo } from "react-apollo";
import { withRouter } from "react-router-dom";

const signout = () => {
  const apolloDecorator = ({ client }) => {
    const routerDecorator = ({ history }) => {
      localStorage.clear();
      client.resetStore();
      history.push("/");
    };

    withRouter(routerDecorator);
  };

  withApollo(apolloDecorator);

  return apolloDecorator;
};

const withApolloAndRouter = component => withApollo(withRouter(component));

export default { signout, withApolloAndRouter };
