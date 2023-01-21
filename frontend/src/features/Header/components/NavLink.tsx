import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Router, { useRouter } from "next/router";

type NavLinkProps = {
  href: string;
  name: string;
};

const NavLink = (props: NavLinkProps) => {
  const { href, name } = props;
  const router = useRouter();

  console.log(router.pathname);
  return (
    <Link
      as={NextLink}
      href={href}
      fontSize="2xl"
      color={router.pathname == href ? "#488582" : "white"}
    >
      {name}
    </Link>
  );
};

export default NavLink;
