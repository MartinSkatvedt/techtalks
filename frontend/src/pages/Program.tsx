import Event from "@/features/Event/components";
import EventDay from "@/features/Event/components/EventDay";
import { EventType } from "@/features/Event/types/EventType";
import { Box, Flex, Heading } from "@chakra-ui/react";
import client from "lib/SanityClient";
import Head from "next/head";

export async function getStaticProps() {
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

type GroupType = {
  [key: number]: EventType[];
};
const Program = (props: ProgramProps) => {
  const { events } = props;

  const eventsGroupedByDate = events.reduce((group: GroupType, event) => {
    const eventDate = new Date(event.start_datetime).getDate();
    group[eventDate] = group[eventDate] ?? [];
    group[eventDate].push(event);
    return group;
  }, {});

  const eventDayComponents = Object.entries(eventsGroupedByDate).map(
    ([day, events]) => <EventDay key={day} events={events} date={day} />
  );
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
        <Flex
          justifyContent="space-evenly"
          mt={8}
          flexDir={["column", "column", "column", "row"]}
        >
          {eventDayComponents}
        </Flex>
      </main>
    </>
  );
};

export default Program;
