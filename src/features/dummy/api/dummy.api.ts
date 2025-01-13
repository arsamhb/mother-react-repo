// import payload and response types
import { useMutation, useQuery } from "@tanstack/react-query";
import { DUMMY_ROUTE, DUMMY_ROUTE_ID } from "./route.api";
import api from "@/lib/axiosInstance";
import { localDummy2apiDummy } from "./adapter.localToApi";
import { apiDummy2localDummy } from "./adapter.apiToLocal";
import {
  ILocalDummyFormResult,
  ILocalDummyFormToSend,
} from "@/features/dummy/types/schema.type";

// DUMMY GET
const useGetDummy = () => useQuery({
  queryKey: ["getDummyById"],
  queryFn: api.get<ILocalDummyFormResult>(
    DUMMY_ROUTE_ID("DummyPersonalId"),
    apiDummy2localDummy
  ),
});

// DUMMY POST
const usePostDummy = useMutation({
  mutationKey: ["createDummy"],
  mutationFn: api.post<ILocalDummyFormToSend, ILocalDummyFormResult>(
    DUMMY_ROUTE,
    localDummy2apiDummy,
    apiDummy2localDummy
  ),
});

// DUMMY DELETE
const useDeleteDummy = useMutation({
  mutationKey: ["deleteDummy"],
  mutationFn: api.delete<ILocalDummyFormToSend>(
    DUMMY_ROUTE_ID("DummyPersonalId")
  ),
});

// DUMMY PUT
const usePutDummy = useMutation({
  mutationKey: ["updateDummy"],
  mutationFn: api.put<ILocalDummyFormToSend, ILocalDummyFormResult>(
    DUMMY_ROUTE,
    localDummy2apiDummy,
    apiDummy2localDummy
  ),
});

export { useDeleteDummy, useGetDummy, usePostDummy, usePutDummy };
