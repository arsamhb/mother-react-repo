// const usePostExam = ({ onSuccess,onError }: { onSuccess: (data: IExam) => void,
//   onError?: () => void;
//  }) => {
//   return useMutation({
//     mutationKey: ['post-exam'],
//     mutationFn: ({ payload,examId }: { payload: IExamCreation,examId:string }) => {
//       return api.post<IExamCreation, IExam>(
//         getExamRouteByExamId(examId),
//         iExamCreation2CreateExamPayload,
//         createExamResponse2IExam
//       )(payload);
//     },
//     onSuccess: (data: IExam) => onSuccess(data),
//     onError: () => onError?.();
//   });
// };

// usage

//   const { mutate: createExam } = usePostExam({ onSuccess: onPostExamSuccess });

// createExam({ payload: v });

// const onPostExamSuccess = (data: IExam) => {
//   notify.success('آزمون ساخته شد');
//   setCurrentStep(2);
//   setCompletedSteps((prev) => [...prev, 1]);
//   setExamId(String(data.id));
// };
