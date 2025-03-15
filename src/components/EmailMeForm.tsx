import { Button, Form, Input, Space, Typography } from "antd";
import SendIcon from "../assets/icons/SendIcon";
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
        rules={[
          { required: true, message: "Please provide your message." },
          {
            max: 40,
            message: "The message is too long! Keep within 40 characters.",
          },
        ]}
      >
        <Input style={{ backgroundColor: "transparent" }} />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" style={{ padding: 10 }}>
          <Space size="small" align="center">
            <SendIcon style={{ fontSize: 20 }} />
            Email Me
          </Space>
        </Button>
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
