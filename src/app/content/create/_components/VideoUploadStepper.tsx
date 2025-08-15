'use client';
import { useState } from 'react';
import NavigationButtons from './NavigationButtons';
import Step1CreationMethod from './Step1CreationMethod';
import Step2FileUploadProcess, { UploadedFile } from './Step2FileUploadProcess';
import Step3VideoMetadata from './Step3VideoMetaData';
import Step4Categories from './Step4Categories';
import StepIndicator from './StepIndicator';
export interface Step {
  id: number;
  title: string;
  label: string;
}
export interface VideoMetadata {
  title: string;
  description: string;
  company: string;
  language: string;
  videoDescription: string;
  coverImage: File | null;
  base: string;
  field: string;
  category: string;
}
function VideoUploadStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [selectedCreationMethod, setSelectedCreationMethod] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [metadata, setMetadata] = useState<VideoMetadata>({
    title: '',
    description: '',
    company: '',
    language: 'انگلیسی',
    videoDescription: '',
    coverImage: null,
    base: '',
    field: '',
    category: '',
  });
  const handleFileUpload = (response: { id: number }, file: File) => {
    setUploadedFile({
      id: response.id,
      file,
      status: 'completed',
    });
  };
  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedCreationMethod !== '';
      case 2:
        return uploadedFile?.status === 'completed';
      case 3:
        return metadata.title && metadata.description;
      case 4:
        return true;
      default:
        return false;
    }
  };
  const handleNextStep = () => {
    if (canProceed()) {
      setCompletedSteps((prev) => [...prev, currentStep]);
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const steps: Step[] = [
    { id: 1, title: 'نحوه آپلود', label: 'نحوه آپلود' },
    { id: 2, title: 'آپلود فایل ها', label: 'آپلود فایل‌ها' },
    { id: 3, title: 'متا دیتا', label: 'متا دیتا' },
    { id: 4, title: 'برچسب زنی', label: 'برچسب زنی' },
  ];
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1CreationMethod
            selectedMethod={selectedCreationMethod}
            onMethodChange={setSelectedCreationMethod}
          />
        );
      case 2:
        return (
          <Step2FileUploadProcess uploadedFile={uploadedFile} onFileUpload={handleFileUpload} />
        );
      case 3:
        return <Step3VideoMetadata metadata={metadata} onMetadataChange={setMetadata} />;
      case 4:
        return (
          <Step4Categories
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="rounded-md px-6  bg-base-100 w-full min-w-0 ">
      <div className="flex flex-col">
        <div className="py-6">
          <StepIndicator steps={steps} currentStep={currentStep} completedSteps={completedSteps} />
        </div>
        <div>{renderCurrentStep()}</div>
        <div>
          <NavigationButtons
            currentStep={currentStep}
            canProceed={canProceed}
            onNext={handleNextStep}
            onPrev={handlePrevStep}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoUploadStepper;
