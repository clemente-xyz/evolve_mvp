import React from "react";
import { Query } from "react-apollo";

import { QUERIES } from "../../apollo";

const { ME_AS_COMPANY } = QUERIES;

const withSession = Component => props => (
  <Query query={ME_AS_COMPANY}>
    {({ loading, data, refetch }) => {
      if (loading) return null;

      const myData = data.meAsCompany;

      return <Component {...props} refetch={refetch} myData={myData} />;
    }}
  </Query>
);

export default withSession;
