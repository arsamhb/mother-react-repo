'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { employmentFormValidationSchema, EmploymentFormSchema } from '@/app/home/_service/schema';
import Button from '@/shared/UI/Button';

const EmploymentForm = () => {
  const { handleSubmit } = useForm<EmploymentFormSchema>({
    resolver: zodResolver(employmentFormValidationSchema),
    defaultValues: {
      name: '',
      password: '',
      phoneNumber: '',
      country: undefined,
      isAgree: false,
    },
  });

  const onSubmit = (data: EmploymentFormSchema) => {
    console.log('Form submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            id="name"
            name="name"
            label="Name"
            type="text"
            placeholder="Enter your name"
            error={fieldState.error?.message}
          />
        )}
      /> */}

      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
};

export default EmploymentForm;
