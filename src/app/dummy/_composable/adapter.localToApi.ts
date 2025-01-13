import { IDummyFormSchema, ILocalDummyFormToSend } from '@/app/dummy/_composable/type.schema';

// ADAPTERS FOR LOCAL TO API
const localDummy2apiDummy = (
  somethingDummy: ILocalDummyFormToSend
): DummyRoute_Payload.IPostDummy => {
  return { test: somethingDummy.local };
};

const dummyForm2dummyForm = (form: IDummyFormSchema): IDummyFormSchema => {
  return { checkbox: form.checkbox, select: form.select, text: form.text };
};

export { localDummy2apiDummy, dummyForm2dummyForm };
