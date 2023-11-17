import { gql } from "@apollo/client";

const query = gql`
  query {
    subjects {
      data {
        attributes {
          Slug
          Name
          questions(pagination: { limit: 50 }) {
            data {
              attributes {
                Question
                subquestions(pagination: { limit: 100 }) {
                  data {
                    attributes {
                      Name
                    }
                  }
                }
                tasks {
                  data {
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          categories {
            data {
              attributes {
                Name
                Logo {
                  data {
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function Layout({ children }) {
  return <></>;
}
