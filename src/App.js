import { useState } from "react";
import Stepper from "./components/Stepper";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <Stepper currentStep={currentStep} />
        {currentStep === 1 && <Step1 nextStep={nextStep} />}
        {currentStep === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
        {currentStep === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
        {currentStep === 4 && (
          <Step4 prevStep={prevStep} setStep={setCurrentStep} />
        )}
      </div>
    </div>
  );
}

export default App;
