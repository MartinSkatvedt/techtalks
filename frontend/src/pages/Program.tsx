import Event from "@/features/Event/components";
import { EventType } from "@/features/Event/types/EventType";
import { Box, Heading } from "@chakra-ui/react";
import client from "lib/SanityClient";
import Head from "next/head";

export async function getServerSideProps() {
  const events = await client.fetch(`*[_type == "event"]`);
  return {
    props: {
      events,
    },
  };
}

type ProgramProps = {
  events: EventType[];
};

const Program = (props: ProgramProps) => {
  const { events } = props;

  const eventComponents = events.map((ev) => <Event key={ev._id} data={ev} />);
  return (
    <>
      <Head>
        <title>Program</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading as="h1" size="xl" textAlign="center">
          Program
        </Heading>
        <Box
          border="1px solid white"
          w="fit-content"
          p="4px"
          borderRadius="8px"
        >
          Er du ekstern, men vil melde deg på? Trykk her!
        </Box>
        {eventComponents}
      </main>
    </>
  );
};

export default Program;
