"use client";

import Accordion from "@/shared/component/UI/Accordion";

const PlayGround = () => {

  return (
    <div>
      <Accordion
        accordionName="FAQTEST"
        accordionsContent={[
          { title: "title1", description: "descrption1" },
          { title: "title2", description: "descrption2" },
          { title: "title3", description: "descrption3" },
          { title: "title4", description: "descrption4" },
        ]}
      />
    </div>
  );
};

export default PlayGround;
