import React from 'react';
import EmploymentForm from './EmploymentForm';
import Card from '@/shared/UI/Card';

const Task = () => {
  return (
    <section className="flex w-full p-md gap-md">
      <Card fractionWidth="1/2">
        <EmploymentForm />
      </Card>
      <Card fractionWidth="1/2">NOTHING FOR NOW</Card>
    </section>
  );
};

export default Task;
