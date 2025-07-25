import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function Step4({ prevStep, setStep }) {
  const { formData, setFormData, setErrors } = useContext(FormContext);

  const handleEdit = (step) => {
    setStep(step);
  };

  const handleSubmit = () => {
    alert("KYC Submitted Successfully!");
    setFormData({
      name: "",
      dob: "",
      email: "",
      city: "",
      state: "",
      pincode: "",
      pan: "",
      aadhar: "",
      photo: null,
    });
    setErrors({});
    localStorage.removeItem("kycForm");
    localStorage.removeItem("kycErrors");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Personal Details</h3>
          <p>Name: {formData.name}</p>
          <p>DOB: {formData.dob}</p>
          <p>Email: {formData.email}</p>
          <button
            onClick={() => handleEdit(1)}
            className="text-blue-500 hover:underline"
          >
            Edit
          </button>
        </div>
        <div>
          <h3 className="font-semibold">Address Info</h3>
          <p>City: {formData.city}</p>
          <p>State: {formData.state}</p>
          <p>Pincode: {formData.pincode}</p>
          <button
            onClick={() => handleEdit(2)}
            className="text-blue-500 hover:underline"
          >
            Edit
          </button>
        </div>
        <div>
          <h3 className="font-semibold">Identity Details</h3>
          <p>PAN: {formData.pan}</p>
          <p>Aadhar: {formData.aadhar}</p>
          <p>Photo: {formData.photo ? formData.photo.name : "None"}</p>
          <button
            onClick={() => handleEdit(3)}
            className="text-blue-500 hover:underline"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Step4;
