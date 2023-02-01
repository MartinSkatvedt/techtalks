import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
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
    <Card w="lg" m={8} mx="auto">
      <CardHeader>
        <Flex justifyContent="center" my={4}>
          <Image
            w="sm"
            src={buildLogoUrl(data.logo.asset._ref)}
            alt={`${data.name} logo`}
          />
        </Flex>
      </CardHeader>

      <Heading as="h2" size="lg" textAlign="center">
        {data.name}
      </Heading>
      <CardBody>
        <Description description={data.description} />
      </CardBody>
    </Card>
  );
};

export default Company;
