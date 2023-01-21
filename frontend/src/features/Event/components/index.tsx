import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@chakra-ui/react";
import { EventType } from "../types/EventType";

type EventProps = {
  data: EventType;
};

const Event = (props: EventProps) => {
  const { data } = props;
  return (
    <Card maxW="sm" m={8}>
      <CardHeader>{data.heading}</CardHeader>
      <CardBody>{data.description}</CardBody>
      <CardFooter>
        <Link href={data.url} isExternal ml="auto">
          <Button as="a" colorScheme="teal">
            Gå til påmelding
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Event;