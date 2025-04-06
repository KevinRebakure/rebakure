import { SendOutlined } from "@ant-design/icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Button, Tag } from "antd";
import copy from "copy-to-clipboard";
import { useState } from "react";
import { H3, H4, Text } from "../shared/typography";
import { Link } from "../shared/utils";

function FooterContent() {
  const [showEmailCopiedAlert, setShowEmailCopiedAlert] = useState(false);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <H3>rebakure.com</H3>
          <Text>Let&apos;s learn and build stuff together.</Text>
          <Button
            style={{ width: "max-content" }}
            onClick={() => {
              copy("kevinrebakure@gmail.com");
              setShowEmailCopiedAlert(true);
              setTimeout(() => {
                setShowEmailCopiedAlert(false);
              }, 1000);
            }}
          >
            <SendOutlined />
            Send me an Email
          </Button>
          {showEmailCopiedAlert && (
            <Alert
              message="Copied email to the clipboard!"
              type="success"
              showIcon
              style={{
                maxWidth: "max-content",
                position: "absolute",
                bottom: 120,
              }}
            />
          )}
        </div>

        <div className="flex items-center gap-3 mt-12">
          {portalIcons.map((icon) => (
            <Link
              href={icon.url}
              key={icon.url}
              target="_blank"
              style={{ color: "white" }}
            >
              {icon.icon}
            </Link>
          ))}
        </div>

        <Text>&copy;2025 rebakure.com</Text>

        <Link
          href="https://obsidian-punch-eb2.notion.site/Credits-1b130bedbec88029bc83eda68d03fe51?pvs=4"
          target="_blank"
          underline
          style={{ color: "white" }}
        >
          Credits
        </Link>
      </div>

      {linksGroup.map((group) => (
        <div key={group.groupHeading} className="hidden sm:block">
          <div className="flex flex-col gap-2">
            <H4>{group.groupHeading}</H4>
            {group.links.map((link) => (
              <div className="flex items-center gap-1" key={link.displayText}>
                <Text>{link.displayText}</Text>
                {!link.done && <Tag color="green">Upcoming</Tag>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const portalIcons = [
  {
    url: "https://github.com/KevinRebakure",
    icon: <FontAwesomeIcon icon={faGithub} style={{ fontSize: 30 }} />,
  },
  {
    url: "https://www.linkedin.com/in/kevin-rebakure-91063a301/",
    icon: (
      <FontAwesomeIcon icon={faLinkedin} style={{ width: 30, height: 30 }} />
    ),
  },
  {
    url: "https://x.com/kevinrebakuree",
    icon: <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: 30 }} />,
  },
  {
    url: "https://www.instagram.com/kevinrebakure/",
    icon: <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 30 }} />,
  },
];

const linksGroup = [
  {
    groupHeading: "My Portfolio",
    links: [
      { displayText: "My projects collection", url: "", done: true },
      { displayText: "Contribute to my projects", url: "", done: true },
    ],
  },
  {
    groupHeading: "Open to the Community",
    links: [
      { displayText: "Be a core member", url: "", done: false },
      { displayText: "Share your projects", url: "", done: false },
    ],
  },
];

export default FooterContent;
