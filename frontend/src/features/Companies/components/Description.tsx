import { CMSBlockType } from "../types/CompanyType";
import { Text } from "@chakra-ui/react";

type DescriptionType = {
  description: CMSBlockType;
};

const Description = (props: DescriptionType) => {
  const { description } = props;

  const blocks = Object.values(description).map((blockObj) => {
    return blockObj.children.map((childElem) => (
      <Text mb="10px" key={childElem._key}>
        {childElem.text}
      </Text>
    ));
  });
  return <>{blocks}</>;
};

export default Description;
