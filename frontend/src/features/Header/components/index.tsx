import { Flex, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import HamburgerToggle from "./HamburgerToggle";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isDesktop] = useMediaQuery("(min-width: 600px)");
  const [hamburgerIsOpen, setHamburgerOpen] = useState(false);
  return (
    <>
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
        {isDesktop ? (
          <NavLinks isDesktop />
        ) : (
          <HamburgerToggle
            isOpen={hamburgerIsOpen}
            setOpen={setHamburgerOpen}
          />
        )}
      </Flex>
      {hamburgerIsOpen ? <NavLinks isDesktop={false} /> : null}
    </>
  );
};

export default Header;
