import { gql } from '@apollo/client';

export const GET_ABOUT = gql`
  query {
    about {
      data {
        id
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
          description
          biography
          skills
        }
      }
    }
  }
`;
