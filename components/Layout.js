import Head from "next/head";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>React Real Estate</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
      <header>{/* TODO: Add a Navbar component */}</header>
      <main>{children}</main>
      <footer>
        {/* TODO: Add a Footer component */}
      </footer>
    </Box>
  </>
);

export default Layout;
