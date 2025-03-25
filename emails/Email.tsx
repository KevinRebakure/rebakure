import { Heading, Html, Text } from "@react-email/components";

interface Props {
  names: string;
  message: string;
}

export default function Email({ names, message }: Props) {
  return (
    <Html>
      <Heading style={{ textAlign: "center" }} as="h1">
        {names} reaching out!
      </Heading>
      <Text style={{ fontWeight: "bold" }}>Full names:</Text>
      <Text>{names}</Text>
      <Text style={{ width: "50%" }}>{message}</Text>
    </Html>
  );
}
