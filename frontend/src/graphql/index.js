import { gql } from '@apollo/client';

export const GET_HOME_DATA = gql`
  query {
    home {
      data {
        attributes {
          heroDescription
          introText
          expertise
          resume {
            data {
              attributes {
                url
                name
                hash
              }
            }
          }
        }
      }
    }
  }
`;

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

export const GET_POSTS = gql`
  query {
    posts {
      data {
        attributes {
          postID
          post_categories {
            data {
              attributes {
                name
              }
            }
          }
          title
          image {
            data {
              attributes {
                url
              }
            }
          }
          author
          publishedAt
          featured
          comments {
            data {
              attributes {
                userName
                content
                publishedAt
              }
            }
          }
        }
      }
    }
  }
`;
