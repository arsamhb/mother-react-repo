"use client";

import Button from "@/shared/component/UI/Button";
import ModalWrapper from "@/shared/component/UI/ModalWrapper";
import TextInput from "@/shared/component/UI/TextInput";
import { useState } from "react";

const PlayGround = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div>
      {/* <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>*/}
      {/* <TextInput
        placeholder="palceholder"
        setValue={setInputValue}
        type="text"
        value={inputValue}
      />  */}
      {/* <ModalWrapper
        modalId="dummyId"
        buttonVariant="primary"
        buttonTitle="Button Title"
      >
        <>
          <h1>title</h1>
          <p>content</p>
          <div>
            <button>action1</button>
            <button>action2</button>
            <button>action3</button>
            <button>action3</button>
            <button>action3</button>
            <button>action3</button>
          </div>
        </>
      </ModalWrapper> */}
    </div>
  );
};

export default PlayGround;
