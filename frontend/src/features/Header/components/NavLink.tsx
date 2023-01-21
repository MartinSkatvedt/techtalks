import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

type NavLinkProps = {
  href: string;
  name: string;
};

const NavLink = (props: NavLinkProps) => {
  const { href, name } = props;
  return (
    <Link as={NextLink} href={href} fontSize="2xl">
      {name}
    </Link>
  );
};

export default NavLink;
