import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { BiSolidUserCircle } from "react-icons/bi";
import Link from "next/link";

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
        <Link
          href="subjects/pocitacove-systemy"
          className="border-2 rounded-xl p-5 hover:bg-[#404258bc] duration-250"
        >
          Počítačové systémy
        </Link>
        <Link
          href="subjects/programove-vybaveni"
          className="border-2 rounded-xl p-5 hover:bg-[#404258bc] duration-250"
        >
          Programové vybavení
        </Link>
      </div>
    </main>
  );
}
