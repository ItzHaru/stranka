import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import Link from "next/link";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

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
        <button className="text-5xl pt-10 absolute top-0 right-10 hover:text-[#1d2048] duration-200">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </button>
      </p>
      <div>
        <h1 className="text-white text-center text-7xl font-bold">
          HaruDolore
        </h1>
        <p className="text-center mt-10">
          ASBFHJASNFAJHSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANFKj
        </p>
      </div>
      <div className="flex place-content-center gap-[100px] text-3xl">
        <Link
          href="subjects/pocitacove-systemy"
          className="border-2 rounded-xl p-5 hover:bg-[#0f112aba] hover:shadow-lg hover:shadow-[#292b45ba] hover:scale-105 duration-300"
        >
          Počítačové systémy
        </Link>
        <Link
          href="subjects/programove-vybaveni"
          className="border-2 rounded-xl p-5 hover:bg-[#0f112aba] hover:shadow-lg hover:shadow-[#292b45ba] hover:scale-105 duration-300"
        >
          Programové vybavení
        </Link>
      </div>
    </main>
  );
}
