import { compose } from "recompose";
import { graphql } from "react-apollo";

import { directorsQuery } from "./queries";
import { addDirectorMutation, updateDirectorMutation } from "./mutation";

const withGraphqlAdd = graphql(addDirectorMutation, {
  props: ({ mutate }) => ({
    addDirector: director =>
      mutate({
        variables: director,
        refetchQueries: [{ query: directorsQuery}]
      }),
  }),
});

const withGraphqlUpdate = graphql(updateDirectorMutation, {
  props: ({ mutate }) => ({
    updateDirector: director =>
      mutate({
        variables: director,
        refetchQueries: [{ query: directorsQuery}]
      }),
  }),
});



export default compose(graphql(directorsQuery), withGraphqlAdd, withGraphqlUpdate);
