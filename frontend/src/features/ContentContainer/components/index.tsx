import Header from "@/features/Header/components";
import { Box } from "@chakra-ui/react";

type ContentContainerProps = {
  children: React.ReactNode;
};
const ContentContainer = (props: ContentContainerProps) => {
  const { children } = props;
  return (
    <Box
      w="95%"
      border="2px solid white"
      p="4px"
      borderRadius="10px"
      mx="auto"
      my="8px"
      minH="90vh"
      backgroundColor="#181b1e"
    >
      <Header />
      {children}
    </Box>
  );
};

export default ContentContainer;
