// export const useQuestionsQuery = createPaginatedQuery<IQuestionParams, QuestionsReadResponse>({
//     queryKey: 'allQuestions',
//     fetchFn: ({ page, limit, ...params }) => {
//       const queryParams = getQuestionParams(params);
//       return api.get<QuestionsReadResponse>(QUESTION_ROUTE, undefined, {
//         ...queryParams,
//         page,
//         limit,
//       })();
//     },
//     resetDeps: (f) => [f.grade, f.category, f.subjectArea, f.topicType, f.QuestionType],
//   });
