import { Box } from "@chakra-ui/react";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <Box
      textAlign="center"
      p="5"
      color="gray.600"
      borderTop="1px"
      borderColor="gray.100"
    >
      &copy; {year} React Real Estate, Inc.
    </Box>
  );
};

export default Footer;
