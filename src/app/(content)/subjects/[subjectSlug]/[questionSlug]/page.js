import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = gql`
  query {
    questions {
      data {
        attributes {
          Slug
        }
      }
    }
  }
`;

const getQuestionDetailsQuery = gql`
  query Query($slug: String!) {
    questions(filters: { Slug: { eq: $slug } }) {
      data {
        attributes {
          Name
          Slug
          subquestions {
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
  }
`;

export default async function Page({ params }) {
  const client = getClient();
  const { data } = await client.query({
    query: getQuestionDetailsQuery,
    variables: { slug: params.questionSlug },
  });

  return (
    <div>
      {data.questions.data.map((question) => {
        return (
          <>
            <h3 className="text-center text-[#E2E8F0] text-5xl mt-10">
              {question.attributes.Name}
            </h3>
            {question.attributes.subquestions.data.map((item, index) => {
              return <p className="pl-3">{item.attributes.Name}</p>;
            })}
          </>
        );
      })}
    </div>
  );
}
