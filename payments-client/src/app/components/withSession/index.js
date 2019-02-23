import React from "react";
import { Query } from "react-apollo";

import { QUERIES } from "../../apollo";

const { ME_AS_COMPANY } = QUERIES;

const withSession = Component => props => (
  <Query query={ME_AS_COMPANY}>
    {({ loading, data }) => {
      if (loading) return null;

      console.log(data);

      return <Component {...props} />;
    }}
  </Query>
);

export default withSession;
