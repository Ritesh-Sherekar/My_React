import { useState } from "react";

import { EXAMPLES } from "../data";
import TabButtom from "./TabButtom";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Example() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Select any option</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title={Example} id="examples">
      <Tabs
        ButtonsContainer = "menu"
        buttons={
          <>
            <TabButtom
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButtom>
            <TabButtom
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButtom>
            <TabButtom
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButtom>
            <TabButtom
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButtom>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
