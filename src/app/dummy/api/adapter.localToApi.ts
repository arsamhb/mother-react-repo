import { ILocalDummyFormToSend } from "@/app/dummy/types/schema.type";

// ADAPTERS FOR LOCAL TO API
const localDummy2apiDummy = (
  somethingDummy: ILocalDummyFormToSend
): DummyRoute_Payload.IPostDummy => {
  return { test: somethingDummy.local };
};

export { localDummy2apiDummy };
