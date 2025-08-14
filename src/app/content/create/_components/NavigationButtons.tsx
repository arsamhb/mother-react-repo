import Button from '@/shared/UI/Button';
import React from 'react';

interface NavigationButtonsProps {
  currentStep: number;
  canProceed: () => boolean | string;
  onNext: () => void;
  onPrev: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentStep,
  canProceed,
  onNext,
  onPrev,
}) => {
  return (
    <div className="flex justify-end gap-x-4 my-6">
      {currentStep !== 1 && (
        <Button
          onClick={onPrev}
          disabled={currentStep === 1}
          variant="neutral"
          className="min-w-40 px-20"
        >
          مرحله قبل
        </Button>
      )}
      <Button onClick={onNext} disabled={!canProceed} variant="primary" className="min-w-40 px-20">
        {currentStep === 4 ? 'ثبت نهایی' : 'مرحله بعد'}
      </Button>
    </div>
  );
};

export default NavigationButtons;
