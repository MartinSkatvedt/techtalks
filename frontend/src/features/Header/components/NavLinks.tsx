import { Divider, Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";

type NavLinksProps = {
  isDesktop: boolean;
};

const NavLinks = (props: NavLinksProps) => {
  const { isDesktop } = props;
  return (
    <Flex
      flexDir={isDesktop ? "row" : "column"}
      gap="16px"
      px="16px"
      minW="40%"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <NavLink href={"/"} name={"Home"} />
      <NavLink href={"/About"} name={"Om Tech Talks"} />
      <NavLink href={"/Program"} name={"Program"} />
      {isDesktop ? null : <Divider my="8px" />}
    </Flex>
  );
};

export default NavLinks;
