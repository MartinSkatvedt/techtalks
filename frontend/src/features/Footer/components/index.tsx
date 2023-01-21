import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex flexDirection="column" textAlign="center" gap="4px" mb="8px">
      <Text>
        Tech Talks - et arrangement i regi av Ekskursjonskomiteen Online.
      </Text>
      <Text>Orgnr. 920 939 627</Text>
      <Text>
        <Link href="mailto:ekskom@online.ntnu.no">ekskom@online.ntnu.no</Link>
      </Text>
      <Text>
        Bedriftskontakt:{" "}
        <Link href="mailto:bedriftskontakt@online.ntnu.no">
          bedriftskontakt@online.ntnu.no
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
