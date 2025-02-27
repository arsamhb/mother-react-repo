// ENTITY INTERFACES
interface ILocalDummyFormToSend {
  local: string;
}

interface ILocalDummyFormResult {
  local: string;
}

interface IDummyFormSchema {
  text: string;
  select: string;
  checkbox: boolean;
}

export type { ILocalDummyFormToSend, ILocalDummyFormResult, IDummyFormSchema };
