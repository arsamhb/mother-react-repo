import React from 'react';

interface ProgressBarProps {
  min: string;
  max: string;
  progressValue: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ max, min, progressValue }) => {
  return (
    <div className="flex items-center gap-md w-full">
      <h6 className="font-bold hidden text-xs text-neutral-content">{min}</h6>
      <progress
        className="progress progress-primary w-full !h-2"
        value={progressValue}
        max="100"
      ></progress>
      <h6 className="font-bold text-xs text-neutral-content">{max}</h6>
    </div>
  );
};

export default ProgressBar;
