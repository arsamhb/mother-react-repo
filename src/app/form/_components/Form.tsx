import React from 'react';
import EmploymentForm from './EmploymentForm';
import Card from '@/shared/UI/Card';

const Form = () => {
  return (
    <section className="flex w-full p-md gap-md items-center justify-center">
      <Card fractionWidth="1/2">
        <EmploymentForm />
      </Card>
    </section>
  );
};

export default Form;
