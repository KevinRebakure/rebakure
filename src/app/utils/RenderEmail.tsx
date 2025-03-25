import Email from "@/Email";
import { render } from "@react-email/render";

interface Props {
  names: string;
  message: string;
}

export default async function renderEmail({ names, message }: Props) {
  const emailHTML = await render(<Email names={names} message={message} />);
  return emailHTML;
}
