import { useGetDummy } from "@/app/dummy/api/dummy.api";
import CheckboxInput from "@/shared/component/UI/CheckboxInput";
import SelectInput from "@/shared/component/UI/SelectInput";
import TextInput from "@/shared/component/UI/TextInput";

type Props = {};

const About = (props: Props) => {
  const { data, isError, error } = useGetDummy();

  return (
    <>
      <div>A NEW ROUTE</div>
      <TextInput
        label="Text Input"
        onChange={() => {}}
        placeholder="textinput placeholder"
        type="text"
        value={""}
      />
      <SelectInput
        label={"Select Input"}
        placeholder={"Selectinput placeholder"}
        options={[{ key: "1", value: "one" }]}
        selected={""}
        onChange={() => {}}
      />
      <CheckboxInput
        label={"Check box label"}
        isChecked={false}
        onChange={() => {}}
      />
    </>
  );
};

export default About;
