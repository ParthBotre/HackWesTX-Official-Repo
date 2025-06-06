import { Accordion } from "@mantine/core";
import Link from "next/link";
import { faqNew } from "../../../lib/constants/faq";

export default function FrequentQuestions() {
  const items = faqNew.map((item) => (
    <Accordion.Item 
      key={item.value} 
      value={item.value}
      className="bg-opacity-50 border border-blue-400/20 rounded-lg mb-2 hover:bg-blue-400/10 transition-colors duration-300"
    >
      <Accordion.Control 
        icon={item.icon}
        className="text-white"
      >
        <span className="text-lg font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent filter drop-shadow-[0_0_10px_rgba(138,43,226,0.6)] drop-shadow-[0_0_20px_rgba(0,191,255,0.4)]">
          {item.value}
        </span>
      </Accordion.Control>
      <Accordion.Panel className="bg-opacity-30 border border-blue-400/10 rounded-b-lg text-white p-4 -mt-2 mb-2">
        {item.description}
        {item.link && (
          <Link 
            href={item.link} 
            className="text-blue-400 hover:text-purple-400 transition-colors duration-300"
            style={{
              textShadow: '0 0 10px rgba(96, 165, 250, 0.6)',
            }}
          >
            {" "}({item.linkText || "Learn more"})
          </Link>
        )}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion 
      variant="separated" 
      radius="lg"
      className="bg-transparent"
    >
      {items}
    </Accordion>
  );
}
