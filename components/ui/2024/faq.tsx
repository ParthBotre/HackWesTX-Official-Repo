import { Accordion } from "@mantine/core";
import Link from "next/link";
import { faqNew } from "../../../lib/constants/faq";

export default function FrequentQuestions() {
  const items = faqNew.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>
        {item.description}
        {item.link && (
          <Link href={item.link} className="text-blue-600">
             ({item.linkText || "Learn more"})
          </Link>
        )}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion variant="separated" radius="lg">
      {items}
    </Accordion>
  );
}
