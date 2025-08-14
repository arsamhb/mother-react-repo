import CheckboxInput from '@/shared/UI/CheckboxInput';
import { Step } from './VideoUploadStepper';
interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  completedSteps: number[];
}
const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep, completedSteps }) => {
  const getStepColor = (stepId: number) => {
    if (completedSteps.includes(stepId)) return 'secondary';
    if (stepId === currentStep) return 'primary';
    return 'base-300';
  };
  const getInputStepColor = (stepId: number) => {
    if (completedSteps.includes(stepId)) return 'checkbox-success';
    if (stepId === currentStep) return 'checkbox-info';
    return '';
  };
  return (
    <div className="flex gap-x-1">
      {steps.map((step, index) => (
        <div
          className={`flex flex-1  border-spacing-2 border-t-4 border-rounded-full border-t-${getStepColor(step.id)} `}
          key={index}
        >
          <CheckboxInput
            id="edit-plan-modal"
            name="edit-plan-modal"
            label={step.label}
            labelTitleClassName={`text-${getStepColor(step.id)}`}
            inputClassName={`checkbox checkbox-xs  ${getInputStepColor(step.id)}`}
            disabled={true}
            isChecked={completedSteps.includes(step.id) ? true : false}
          />
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
