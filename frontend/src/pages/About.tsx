import Company from "@/features/Companies/components";
import { CompanyType } from "@/features/Companies/types/CompanyType";
import { Box, Heading } from "@chakra-ui/react";
import client from "lib/SanityClient";
import Head from "next/head";

export async function getStaticProps() {
  const companies = await client.fetch(`*[_type == "company"]`);
  return {
    props: {
      companies,
    },
  };
}

type AboutProps = {
  companies: CompanyType[];
};

const About = (props: AboutProps) => {
  const { companies } = props;

  const companyComponents = companies.map((company) => (
    <Company key={company._id} data={company} />
  ));
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading as="h1" size="xl" textAlign="center">
          Samarbeidspartnere
        </Heading>

        {companyComponents}
      </main>
    </>
  );
};
export default About;
