import CheckboxBlank from '@public/img/svg/checkboxBlank.svg';
import CheckboxBlue from '@public/img/svg/checkboxBlue.svg';
import CheckboxGreen from '@public/img/svg/checkboxGreen.svg';
import Image from 'next/image';
import { Step } from './VideoUploadStepper';

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  completedSteps: number[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep, completedSteps }) => {
  const getStepStyles = (stepId: number) => {
    const isCompleted = completedSteps.includes(stepId);
    const isCurrent = stepId === currentStep;

    if (isCompleted) {
      return {
        colorClass: 'secondary',
        borderColor: 'oklch(var(--s))',
        SvgComponent: CheckboxGreen,
      };
    }

    if (isCurrent) {
      return {
        colorClass: 'primary',
        borderColor: 'oklch(var(--p))',
        SvgComponent: CheckboxBlue,
      };
    }

    return {
      colorClass: 'base-300',
      borderColor: 'oklch(var(--b3))',
      SvgComponent: CheckboxBlank,
    };
  };

  return (
    <div className="flex gap-x-1">
      {steps.map((step, index) => {
        const { colorClass, borderColor, SvgComponent } = getStepStyles(step.id);

        return (
          <div
            className={`flex flex-1 gap-x-2 pt-1 border-t-4`}
            style={{ borderTopColor: borderColor }}
            key={index}
          >
            <Image src={SvgComponent} alt="نشانگر وضعیت" />
            <span className={`text-${colorClass}`}>{step.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
