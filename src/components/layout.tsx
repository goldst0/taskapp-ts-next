import { Box, Container } from "@chakra-ui/react";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Box h="5px" w="100%">
        Task App!
      </Box>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
