'use client';
import TextInput from '@/shared/UI/TextInput';
import searchIconSvg from '@public/img/svg/searchIconSvg.svg';
import React from 'react';

// import { useFormik } from 'formik';
// import { planSearchFormInitialValues } from '@/app/plans/_service/schema';
// import { PlanSearchFormValidationSchema } from '@/app/plans/_service/validation';

interface ContentSearchBarProps {}

const ContentSearchBar: React.FC<ContentSearchBarProps> = ({}) => {
  // const formik = useFormik({
  //   initialValues: planSearchFormInitialValues,
  //   onSubmit: (values) => console.log(values),
  //   validationSchema: PlanSearchFormValidationSchema,
  // });

  return (
    <form className="flex grow">
      <TextInput
        id="search-bar"
        name="search-bar"
        onChange={() => {}}
        placeholder="جستجو کنید"
        type="text"
        value=""
        error=""
        icon=""
        key="search-bar-text-input"
        containerClassName="w-full "
        labelClassName="rounded-2 bg-neutral"
        iconItem={searchIconSvg}
      />
    </form>
  );
};

export default ContentSearchBar;
