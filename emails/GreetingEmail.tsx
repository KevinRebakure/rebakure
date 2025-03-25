import { Font, Head, Heading, Html, Text } from "@react-email/components";

export default function Email() {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Heading as="h1" style={{ textAlign: "center" }}>
        Kevin reaching out!
      </Heading>
      <Text>Full names: Kevin Rebakure</Text>
      <Text style={{ width: "50%", textAlign: "justify" }}>
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
