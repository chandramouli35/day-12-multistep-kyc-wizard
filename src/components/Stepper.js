function Stepper({ currentStep }) {
  const steps = [
    "Personal Details",
    "Address Info",
    "Identity Details",
    "Summary",
  ];

  return (
    <div className="flex justify-between mb-6">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`flex-1 text-center py-2 ${
            currentStep === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded-md mx-1 transition-all`}
        >
          {index + 1}. {step}
        </div>
      ))}
    </div>
  );
}

export default Stepper;
