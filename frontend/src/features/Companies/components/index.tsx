import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";
import { CompanyType } from "../types/CompanyType";
import Description from "./Description";

type CompanyProps = {
  data: CompanyType;
};

const Company = (props: CompanyProps) => {
  const { data } = props;

  const buildLogoUrl = (sanityRef: string) => {
    const split = sanityRef.split("-");
    return `https://cdn.sanity.io/images/${process.env.sanityProjectId}/${process.env.sanityDataset}/${split[1]}-${split[2]}.${split[3]}`;
  };

  return (
    <Card maxW="sm" m={8}>
      <CardHeader>
        <Heading as="h2" size="lg" textAlign="center">
          {data.name}
        </Heading>
      </CardHeader>
      <CardBody>
        <Image
          src={buildLogoUrl(data.logo.asset._ref)}
          alt={`${data.name} logo`}
          m="4px"
        />
        <Description description={data.description} />
      </CardBody>
    </Card>
  );
};

export default Company;
