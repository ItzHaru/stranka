import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { BiSolidUserCircle } from "react-icons/bi";

const query = gql`
  query {
    categories {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;

export default async function Home() {
  const client = getClient();
  const { data } = await client.query({ query });
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col gap-[170px]">
      <p>
        <button className="text-5xl pt-10 absolute top-0 right-10">
          <BiSolidUserCircle />
        </button>
      </p>
      <h1 className="text-white text-center text-8xl">Maturitní stránka</h1>
      <div className="flex place-content-center gap-[100px] text-3xl">
        <button className="border-2 rounded-xl p-5 hover:bg-[#404258bc]">
          Počítačové systémy
        </button>
        <button className="border-2 rounded-xl p-5 hover:bg-[#404258bc]">
          Programové vybavení
        </button>
      </div>
    </main>
  );
}
