import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      mb={18}
      borderBottom="1px solid white"
    >
      <Image
        src="images/logo.svg"
        alt="Tech Talks logo"
        width="200"
        height="200"
      />
      <Flex
        gap="16px"
        px="16px"
        minW="40%"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <NavLink href={"/"} name={"Home"} />
        <NavLink href={"/About"} name={"Om Tech Talks"} />
        <NavLink href={"/Program"} name={"Program"} />
      </Flex>
    </Flex>
  );
};

export default Header;
