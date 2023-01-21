import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Dispatch, SetStateAction } from "react";

type HamburgerToggleProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const HamburgerToggle = (props: HamburgerToggleProps) => {
  const { isOpen, setOpen } = props;
  return (
    <>
      {isOpen ? (
        <CloseIcon
          boxSize={6}
          color="white"
          mx="16px"
          onClick={() => setOpen(false)}
        />
      ) : (
        <HamburgerIcon
          boxSize={8}
          color="white"
          mx="16px"
          onClick={() => setOpen(true)}
        />
      )}
    </>
  );
};

export default HamburgerToggle;
