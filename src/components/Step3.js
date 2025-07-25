import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function Step3({ nextStep, prevStep }) {
  const { formData, setFormData, errors, setErrors } = useContext(FormContext);

  const validate = () => {
    const newErrors = {};
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.pan))
      newErrors.pan = "Invalid PAN (e.g., ABCDE1234F)";
    if (!/^\d{12}$/.test(formData.aadhar))
      newErrors.aadhar = "Aadhar must be 12 digits";
    if (!formData.photo) newErrors.photo = "Photo is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = () => {
    if (validate()) nextStep();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Identity Details</h2>
      <div>
        <input
          name="pan"
          value={formData.pan}
          onChange={handleChange}
          onBlur={() => validate()}
          placeholder="PAN (e.g., ABCDE1234F)"
          className="p-2 border rounded w-full"
        />
        {errors.pan && <p className="text-red-500 text-sm">{errors.pan}</p>}
      </div>
      <div>
        <input
          name="aadhar"
          value={formData.aadhar}
          onChange={handleChange}
          onBlur={() => validate()}
          placeholder="Aadhar (12 digits)"
          className="p-2 border rounded w-full"
        />
        {errors.aadhar && (
          <p className="text-red-500 text-sm">{errors.aadhar}</p>
        )}
      </div>
      <div>
        <input
          name="photo"
          type="file"
          onChange={handleChange}
          onBlur={() => validate()}
          className="p-2 border rounded w-full"
        />
        {errors.photo && <p className="text-red-500 text-sm">{errors.photo}</p>}
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
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step3;
