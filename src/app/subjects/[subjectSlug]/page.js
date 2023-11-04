import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = gql`
  query {
    subjects {
      data {
        attributes {
          Slug
        }
      }
    }
  }
`;

const getSubjectDetailsQuery = gql`
  query Query($slug: String!) {
    subjects(filters: { Slug: { eq: $slug } }) {
      data {
        attributes {
          Slug
          Name
          questions {
            data {
              attributes {
                Question
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
                Slug
              }
            }
          }
        }
      }
    }
  }
`;

export async function generateStaticParams() {
  const client = getClient();
  const { data } = await client.query({ query: query });
  return data.subjects.data.map((subject) => {
    return {
      subjectSlug: subject.attributes.Slug,
    };
  });
}

export const dynamicParams = false;

export default async function Page({ params }) {
  const client = getClient();
  const { data } = await client.query({
    query: getSubjectDetailsQuery,
    variables: { slug: params.subjectSlug },
  });
  console.log(data.subjects.data);
  data.subjects.data.map((subject) => {
    console.log(subject);
  });
  return (
    <div>
      {data.subjects.data.map((subject) => {
        return JSON.stringify(subject);
      })}
    </div>
  );
  return <p>{JSON.stringify(data)}</p>;
}
