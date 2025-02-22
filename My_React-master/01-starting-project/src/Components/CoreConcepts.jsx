import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export default function Components() {
  return (
    <Section title={'Core Concept'} id="core-concepts">
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

        {CORE_CONCEPTS.map((conceptItems) => (
          <CoreConcept key={conceptItems.title} {...conceptItems} />
        ))}
      </ul>
    </Section>
  );
}
