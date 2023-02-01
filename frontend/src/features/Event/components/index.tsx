import { InfoIcon, TimeIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { EventType } from "../types/EventType";

type EventProps = {
  data: EventType;
};

const Event = (props: EventProps) => {
  const { data } = props;
  const { heading, description, start_datetime, end_datetime, location, url } =
    data;
  const start = new Date(start_datetime);
  const end = new Date(end_datetime);

  return (
    <Box
      my={4}
      mx="auto"
      boxShadow="4px 0px 10px 5px rgba(255,255,255,0.1)"
      borderWidth="1px 1px 1px 5px"
      borderColor="white white white #488582"
      borderRadius="0px 5px 5px 0px"
      w="sm"
      p={4}
    >
      <Heading as="h3" size="md">
        {heading}
      </Heading>
      <Flex justifyContent="space-between" mt={4}>
        <Flex alignItems="center">
          <Icon as={TimeIcon} boxSize={4} mr={1} />
          {start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          {" - "}
          {end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </Flex>
        <Flex alignItems="center">
          <Icon as={InfoIcon} boxSize={4} mr={1} />
          {location}
        </Flex>
      </Flex>
      <Box mt={4}>
        <Text>{description}</Text>
      </Box>
      <Flex justifyContent="flex-end">
        <Link href={url} isExternal target="_blank">
          <Button backgroundColor="#488582">Påmelding</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Event;
