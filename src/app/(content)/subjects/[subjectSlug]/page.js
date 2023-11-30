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
          questions(pagination: { limit: 50 }) {
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

export async function generateStaticParams() {
  const client = getClient();
  const { data } = await client.query({ query: query });
  return data.subjects.data.map((subject) => {
    return {
      subjectSlug: subject.attributes.Slug,
    };
  });
}

export const dynamicParams = "blocking";

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
        return (
          <div className="bg-[#27293f]">
            <h3 className="text-center text-[#E2E8F0] text-5xl mt-10">
              hlavni stranka
              {subject.attributes.Name}
            </h3>
            {subject.attributes.questions.data.map((question, index) => {
              return (
                <p className="pl-3">
                  {index + 1}. {question.attributes.Name}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
