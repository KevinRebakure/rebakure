import { Heading, Html, Text } from "@react-email/components";

interface Props {
  names: string;
}

export default function Email({ names }: Props) {
  return (
    <Html>
      <Heading style={{ textAlign: "center" }} as="h1">
        {names} reaching out!
      </Heading>
      <Text style={{ fontWeight: "bold" }}>Full names:</Text>
      <Text>{names}</Text>
      <Text style={{ width: "50%" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eros
        leo. Nam vel elit commodo, pretium justo nec, mattis arcu. Aenean
        faucibus est at massa tincidunt, ut suscipit mi fermentum. Aenean
        commodo lacus enim, vitae auctor lacus dictum at. In augue metus,
        pellentesque quis varius ac, faucibus consectetur justo. Phasellus lacus
        libero, lacinia in auctor vel, cursus nec justo. Ut quis malesuada nisi,
        ut vulputate neque.
      </Text>
    </Html>
  );
}
