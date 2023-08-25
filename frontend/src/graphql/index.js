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
          content
          image {
            data {
              attributes {
                url
              }
            }
          }
          publishedAt
          featured
        }
      }
    }
  }
`;

export const GET_POST_BY_POSTID = gql`
  query GetPostByPostID($getPostID: String!) {
    posts(filters: { postID: { eq: $getPostID } }) {
      data {
        id
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
          content
          author
          publishedAt
          featured
          image {
            data {
              attributes {
                url
              }
            }
          }
          comments {
            data {
              attributes {
                commentId
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

export const CREATE_COMMENT = gql`
  mutation CreateComment(
    $userName: String!
    $content: String!
    $strapiPostId: ID
    $publishedAt: DateTime
    $commentId: String!
  ) {
    createComment(
      data: {
        userName: $userName
        content: $content
        strapiPostId: $strapiPostId
        publishedAt: $publishedAt
        commentId: $commentId
      }
    ) {
      data {
        attributes {
          userName
          commentId
          content
          publishedAt
        }
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation SendMessage(
    $fullname: String!
    $email: String!
    $message: String!
    $publishedAt: DateTime
  ) {
    createMessage(
      data: {
        fullname: $fullname
        email: $email
        message: $message
        publishedAt: $publishedAt
      }
    ) {
      data {
        attributes {
          fullname
          email
          message
          publishedAt
        }
      }
    }
  }
`;
