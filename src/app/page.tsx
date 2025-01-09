"use client";

import SelectInput from "@/shared/component/UI/SelectInput";
import { useState } from "react";

export default function Home() {
  const [val, setVal] = useState<string>("");

  return (
    <div className="flex flex-col gap-4">
      <SelectInput
        
        label="salam"
        placeholder="placeholder"
        selected={val}
        setSelected={setVal}
        options={[
          { key: "a", value: "aa" },
          { key: "b", value: "bb" },
          { key: "c", value: "cc" },
          { key: "v", value: "vv" },
        ]}
      />
    </div>
  );
}
