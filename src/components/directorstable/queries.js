import { gql } from "@apollo/client";


export const directorQuery = gql`
query directorQuery {
    directors {
        id
        name
        age
    }
}`
