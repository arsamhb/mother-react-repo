import * as Yup from "yup";

const DummyFormValidationSchema = {
  text: Yup.string().required("THIS IS REQUIRED"),
  select: Yup.string().required("THIS IS REQUIRED"),
  checkbox: Yup.boolean().isTrue("IT SHOULD BE TRUE"),
};

const YupDummyFormValidationSchema = Yup.object().shape(
  DummyFormValidationSchema
);

export { YupDummyFormValidationSchema as DummyFormValidationSchema };
