import React from 'react';
import {
  Accordion as ShadcnAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface AccordionProps {
  accordionName: string;
  children: React.ReactNode;
  isFilterSelected?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ accordionName, isFilterSelected, children }) => {
  return (
    <ShadcnAccordion type="single" collapsible className="border-none outline-none">
      <AccordionItem value={accordionName} className="border-none">
        <AccordionTrigger className="text-primary text-base font-medium py-2 hover:no-underline">
          <div className="relative flex items-center">
            {accordionName}
            {isFilterSelected && (
              <span className="w-1 h-1 bg-blue-500 rounded-full absolute -right-3 top-1/2 -translate-y-1/2" />
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent className="overflow-visible">
          <div className="p-sm">{children}</div>
        </AccordionContent>
      </AccordionItem>
    </ShadcnAccordion>
  );
};

export default Accordion;
