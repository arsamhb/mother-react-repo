import React from "react";
import { IAccordionContent } from "./accordion.interface";

interface AccordionProps {
  accordionName: string;
  accordionsContent: Array<IAccordionContent>;
}

const Accordion: React.FC<AccordionProps> = ({
  accordionsContent,
  accordionName,
}) => {
  return (
    <div>
      {accordionsContent.map((item: IAccordionContent, index: number) => (
        <div className="collapse bg-base-200" key={index}>
          <input
            type="radio"
            name={accordionName}
            defaultChecked={index === 0}
          />
          <div className="custom-accordion-title text-xl font-medium">{item.title}</div>
          <div className="custom-accordion-content">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
