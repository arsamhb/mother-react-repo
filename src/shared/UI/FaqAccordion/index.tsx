'use client';

import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Button from '@/shared/UI/Button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface IAccordionContent {
  title: string;
  description: string;
}

export interface FaqAccordionProps {
  accordionName: string;
  accordionsContent: Array<IAccordionContent>;
  initialCount?: number;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ accordionsContent, initialCount = 3 }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? accordionsContent : accordionsContent.slice(0, initialCount);

  return (
    <div className="flex flex-col items-center w-full gap-md">
      {/* ACCORDION LIST */}
      <div className="relative w-full flex flex-col gap-sm md:gap-md">
        <Accordion type="single" collapsible className="w-full flex flex-col gap-sm md:gap-md">
          {visibleItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={String(index)}
              className="shadow-primary rounded-3xl w-full bg-white overflow-hidden border-none"
            >
              <AccordionTrigger
                className={cn(
                  'text-sm md:text-base lg:text-lg font-medium p-md',
                  'hover:no-underline flex items-center justify-between'
                )}
              >
                <span className="line-clamp-2 text-start">{item.title}</span>
              </AccordionTrigger>

              <AccordionContent className="px-md pb-sm text-sm md:text-base">
                <p>{item.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* FADE EFFECT */}
        {!showAll && accordionsContent.length > initialCount && (
          <div className="absolute bottom-0 right-0 left-0 h-32 bg-gradient-to-t from-base-100 to-transparent pointer-events-none rounded-b-xl" />
        )}
      </div>

      {/* TOGGLE BUTTON */}
      {accordionsContent.length > initialCount && (
        <Button
          onClick={() => setShowAll(!showAll)}
          className="bg-white border border-primary text-primary rounded-3xl w-40"
        >
          <div className="flex gap-sm items-center">
            <span>{showAll ? 'بستن' : 'نمایش همه'}</span>
            <ChevronDown
              className={cn(
                'size-4 shrink-0 transition-transform duration-300',
                showAll && 'rotate-180'
              )}
            />
          </div>
        </Button>
      )}
    </div>
  );
};

export default FaqAccordion;
