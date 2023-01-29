import { Box, Heading, Text } from "@chakra-ui/react";
import { EventType } from "../types/EventType";

type EventProps = {
  data: EventType;
};

const Event = (props: EventProps) => {
  const { data } = props;
  const { heading, description, start_datetime, end_datetime, location } = data;
  const start = new Date(start_datetime);
  const end = new Date(end_datetime);

  return (
    <Box
      m={8}
      boxShadow="4px 0px 10px 5px rgba(255,255,255,0.1)"
      borderWidth="1px 1px 1px 5px"
      borderColor="white white white #488582"
      borderRadius="0px 5px 5px 0px"
      w="xs"
      p={4}
    >
      <Heading as="h3" size="md" mb={2}>
        {heading}
      </Heading>
      <Box>
        {start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        {" -> "}
        {end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        <br />
        {location}
      </Box>
      <Box>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export default Event;
