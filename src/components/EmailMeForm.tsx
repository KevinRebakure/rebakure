import { Form, Input, Typography } from "antd";
const { Title } = Typography;

function EmailMeForm() {
  return (
    <Form
      name="Email me form"
      variant="underlined"
      requiredMark={false}
      labelCol={{ span: 3 }}
    >
      <Title level={2} style={{ textAlign: "center" }}>
        Stay In Touch
      </Title>
      <Form.Item<FieldType>
        label="Full names"
        name="fullName"
        labelAlign="left"
        rules={[{ required: true, message: "Please provide your full names." }]}
      >
        <Input style={{ backgroundColor: "transparent" }} />
      </Form.Item>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        labelAlign="left"
        rules={[{ required: true, message: "Please provide your Email." }]}
      >
        <Input style={{ backgroundColor: "transparent" }} />
      </Form.Item>
      <Form.Item<FieldType>
        label="Subject"
        name="subject"
        labelAlign="left"
        rules={[{ required: true, message: "Please provide your subject." }]}
      >
        <Input style={{ backgroundColor: "transparent" }} />
      </Form.Item>
      <Form.Item<FieldType>
        label="Message"
        name="message"
        labelAlign="left"
        rules={[{ required: true, message: "Please provide your message." }]}
      >
        <Input style={{ backgroundColor: "transparent" }} />
      </Form.Item>
    </Form>
  );
}

interface FieldType {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default EmailMeForm;
