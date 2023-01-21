import { Flex, Show } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import HamburgerToggle from "./HamburgerToggle";
import NavLinks from "./NavLinks";

const Header = () => {
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

        <Show above="601px">
          <NavLinks isDesktop />
        </Show>
        <Show below="600px">
          <HamburgerToggle
            isOpen={hamburgerIsOpen}
            setOpen={setHamburgerOpen}
          />
        </Show>
      </Flex>
      {hamburgerIsOpen ? <NavLinks isDesktop={false} /> : null}
    </>
  );
};

export default Header;
