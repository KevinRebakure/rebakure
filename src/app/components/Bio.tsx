"use client";

import { Flex, Typography } from "antd";

const { Title, Text } = Typography;

function Bio() {
  return (
    <Flex
      vertical
      gap="middle"
      style={{ width: "50%", marginLeft: 200, whiteSpace: "pre-line" }}
    >
      <Title level={3}>How we got here...</Title>
      <Text>{bio}</Text>
    </Flex>
  );
}

const bio = `I was first introduced to web development in 2019. However, it wasn't until 2023, after high school, that I began to take it seriously. Over the next eight months, I taught myself through various online resources. I was inspired by the achievements one can make in the tech industry and, luckily, coding came more naturally to me than the "Physics, Chemistry, and Mathematics" combination I took in high school. Despite how ambitious I was, I couldn't meet my expectations of how quickly I wanted to progress due to my bad learning habits and inconsistencies. 

Joining "The Gym" in April 2024 was a transformative experience for me as it was my first time working in a professional setting. Since then, I've been more consistent, training my brain to handle the 50+ hours work weekly. Fun fact, we call it, “To build the muscle,” hence the name “The Gym.”

Aside from coding, I enjoy learning about human relations and business. I express myself through music in various ways, such as singing and playing the piano. I also have plans to join a dance class. I'm a movie enthusiast who values sleep just as much. I often take long night walks for some alone time, just to think.`;

export default Bio;
