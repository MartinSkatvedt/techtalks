import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";
import { CompanyType } from "../types/CompanyType";
import Description from "./Description";

type CompanyProps = {
  data: CompanyType;
};

const Company = (props: CompanyProps) => {
  const { data } = props;

  return (
    <Card maxW="sm" m={8}>
      <CardHeader>
        <Heading as="h2" size="lg" textAlign="center">
          {data.name}
        </Heading>
      </CardHeader>
      <CardBody>
        <Image src={data.logo} alt={`${data.name} logo`} m="4px" />
        <Description description={data.description} />
      </CardBody>
    </Card>
  );
};

export default Company;
