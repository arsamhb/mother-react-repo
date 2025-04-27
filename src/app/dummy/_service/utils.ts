// import { IQuestionParams } from './interface.schema';

// export const getQuestionParams = (params: Partial<IQuestionParams>): Partial<IQuestionParams> => {
//   const apiParams = {
//     gradeId: params.grade ? Number(params.grade) : undefined,
//     categoryId: params.category ? Number(params.category) : undefined,
//     subjectAreaId: params.subjectArea ? Number(params.subjectArea) : undefined,
//     topicTypeId: params.topicType ? Number(params.topicType) : undefined,
//     questionType: params.QuestionType,
//   };

//   return Object.fromEntries(Object.entries(apiParams).filter(([_, value]) => value !== undefined));
// };
