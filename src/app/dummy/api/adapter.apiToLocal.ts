import { ILocalDummyFormResult } from "@/app/dummy/types/schema.type";

// ADAPTERS FOR API TO LOCAL
const apiDummy2localDummy = (
  somethingDummy: DummyRoute_Response.IPostDummy
): ILocalDummyFormResult => {
  return { local: somethingDummy.test };
};

export { apiDummy2localDummy };
