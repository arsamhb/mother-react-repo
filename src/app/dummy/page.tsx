'use client';
// import { usePostDummyForm } from "@/app/dummy/_composable/api/dummy.api";
import CheckboxInput from '@/shared/component/UI/CheckboxInput';
import SelectInput from '@/shared/component/UI/SelectInput';
import TextInput from '@/shared/component/UI/TextInput';
import { useFormik } from 'formik';
import { dummyFromInitialValues } from './_composable/schema';
import { DummyFormValidationSchema } from './_composable/validation';
import { useMutation } from '@tanstack/react-query';
import { IDummyFormSchema } from './_composable/type.schema';
import api from '@/lib/axiosInstance';
import { DUMMY_ROUTE } from './_composable/route.api';
import Button from '@/shared/component/UI/Button';

const About = () => {
  const usePostDummyForm = useMutation({
    mutationKey: ['postForm'],
    mutationFn: api.post<IDummyFormSchema, string>(DUMMY_ROUTE),
  });

  const formik = useFormik({
    initialValues: dummyFromInitialValues,
    onSubmit: (values) => usePostDummyForm.mutate(values),
    validationSchema: DummyFormValidationSchema,
    validateOnChange: false,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput
        id="text"
        name="text"
        label="LABEL"
        placeholder="text input placeholder"
        type="text"
        onChange={formik.handleChange}
        error={formik.errors.text}
        value={formik.values.text}
      />
      <SelectInput
        id="select"
        name="select"
        label={'LABEL'}
        placeholder={'Select input placeholder'}
        options={[{ key: '1', value: 'one' }]}
        selected={formik.values.select}
        onChange={formik.handleChange}
        error={formik.errors.select}
      />
      <CheckboxInput
        id="checkbox"
        name="checkbox"
        label={'LABEL'}
        isChecked={formik.values.checkbox}
        onChange={formik.handleChange}
        error={formik.errors.checkbox}
      />
      <Button>Submit</Button>
    </form>
  );
};

export default About;
