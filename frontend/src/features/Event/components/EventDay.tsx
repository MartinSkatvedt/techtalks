import { Box, Heading } from "@chakra-ui/react";
import { EventType } from "../types/EventType";
import Event from "@/features/Event/components";

type EventDayProps = {
  date: string;
  events: EventType[];
};

const EventDay = (props: EventDayProps) => {
  const { date, events } = props;

  const eventComponents = events
    .sort((a, b) =>
      Date.parse(a.start_datetime) > Date.parse(b.start_datetime) ? 1 : -1
    )
    .map((ev) => <Event key={ev._id} data={ev} />);
  return (
    <Box>
      <Heading as="h2" textAlign="center">
        {date}. Februar
      </Heading>
      {eventComponents}
    </Box>
  );
};

export default EventDay;
