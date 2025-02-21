// General import Statement
import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header.jsx";
import CoreConcept from "./Components/CoreConcept.jsx";
import TabButtom from "./Components/TabButtom.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

            {/* another way */}

            {CORE_CONCEPTS.map((conceptItems)=><CoreConcept key={conceptItems.title} {...conceptItems}/>)}
          </ul>
        </section>

        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButtom isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButtom>
            <TabButtom isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButtom>
            <TabButtom isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButtom>
            <TabButtom isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButtom>
          </menu>
          <div id="tab-content">
            {!selectedTopic && <p>Select any option</p>}
            {selectedTopic && (
              <>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
