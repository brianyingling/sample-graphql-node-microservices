import gql from 'graphql-tag';

const CREATE_LISTING = gql`
    mutation($description: String!, $title: String!) {
        createListing(description: $description, title: $title) {
            id
        }
    }
`;

export {
    CREATE_LISTING
}
