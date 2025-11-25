'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { employmentFormValidationSchema, EmploymentFormSchema } from '@/app/home/_service/schema';
import TextInput from '@/shared/UI/TextInput';
import Button from '@/shared/UI/Button';
import CheckboxInput from '@/shared/UI/CheckboxInput';
import SelectInput from '@/shared/UI/SelectInput';
import useModalState from '@/shared/hooks/useModalState';
import ModalWrapper from '@/shared/UI/ModalWrapper';

const EmploymentForm = () => {
  const { control, handleSubmit, getValues, reset } = useForm<EmploymentFormSchema>({
    resolver: zodResolver(employmentFormValidationSchema),
    defaultValues: {
      name: '',
      password: '',
      phoneNumber: '',
      country: 'Iran',
      isAgree: false,
    },
  });

  const { open, close, isOpen } = useModalState();
  const onSubmit = () => {
    open();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              id="name"
              name={field.name}
              label="Name"
              type="text"
              placeholder="Enter your name"
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="phoneNumber"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              id="phoneNumber"
              name={field.name}
              label="Phone Number"
              type="tel"
              placeholder="Enter phone number"
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="country"
          control={control}
          render={({ field, fieldState }) => (
            <SelectInput
              id="country"
              name={field.name}
              label="Country"
              placeholder="Select your country"
              value={field.value}
              onChange={field.onChange}
              options={[
                { key: 'Iran', value: 'Iran' },
                { key: 'Netherland', value: 'Netherland' },
              ]}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              id="password"
              name={field.name}
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="isAgree"
          control={control}
          render={({ field, fieldState }) => (
            <CheckboxInput
              id="isAgree"
              name={field.name}
              label="I agree to the privacy policy"
              checked={field.value}
              onChange={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>

      <ModalWrapper
        modalId="employment-form-modal"
        size="sm"
        isOpen={isOpen}
        onClose={() => {
          close();
          reset();
        }}
      >
        <div className="flex flex-col gap-md">
          <h2 className="text-2xl font-bold">Employment Form</h2>
          <p>Name: {getValues('name')}</p>
          <p className="text-lg">Phone Number: {getValues('phoneNumber')}</p>
          <p className="text-lg">Country: {getValues('country')}</p>
          <p className="text-lg">Password: {getValues('password')}</p>
          <p className="text-lg">
            I agree to the privacy policy: {getValues('isAgree') ? 'Yes' : 'No'}
          </p>
          <Button
            variant="primary"
            onClick={() => {
              close();
              reset();
            }}
          >
            Submit Another Form
          </Button>
        </div>
      </ModalWrapper>
    </>
  );
};

export default EmploymentForm;
