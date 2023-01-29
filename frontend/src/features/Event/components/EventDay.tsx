import { Box, Heading } from "@chakra-ui/react";
import { EventType } from "../types/EventType";
import Event from "@/features/Event/components";

type EventDayProps = {
  date: string;
  events: EventType[];
};

const EventDay = (props: EventDayProps) => {
  const { date, events } = props;
  events.sort((ev) => Date.parse(ev.start_datetime));
  const eventComponents = events.map((ev) => <Event key={ev._id} data={ev} />);
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
