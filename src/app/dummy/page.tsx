'use client';
import CheckboxInput from '@/shared/UI/CheckboxInput';
import SelectInput from '@/shared/UI/SelectInput';
import TextInput from '@/shared/UI/TextInput';
import { useFormik } from 'formik';
import { dummyFromInitialValues } from './_service/schema';
import { DummyFormValidationSchema } from './_service/validation';
import { useMutation } from '@tanstack/react-query';
import { IDummyFormSchema } from './_service/interface.schema';
import api from '@/lib/axiosInstance';
import { DUMMY_ROUTE } from './_service/route.api';
import Button from '@/shared/UI/Button';
import { notify } from '@/lib/notification/notificationService';

const Dummy = () => {
  const usePostDummyForm = useMutation({
    mutationKey: ['postForm'],
    mutationFn: api.post<IDummyFormSchema, string>(DUMMY_ROUTE),
    onSuccess: () => {
      notify.success('ورود با موفقیت انجام شد.');
    },
  });

  const formik = useFormik({
    initialValues: dummyFromInitialValues,
    onSubmit: (values) => usePostDummyForm.mutate(values),
    validationSchema: DummyFormValidationSchema,
    validateOnChange: false,
  });

  return (
    <>
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
          value={formik.values.select}
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
    </>
  );
};

export default Dummy;
