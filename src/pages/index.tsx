import type { NextPage } from "next";
import { ReactElement } from "react";
import Layout from "../components/layout";
import { Link } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <>
      <Link href="signin">Sign In</Link>
      <div>a</div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
