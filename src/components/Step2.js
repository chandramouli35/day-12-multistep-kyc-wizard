import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function Step2({ nextStep, prevStep }) {
  const { formData, setFormData, errors, setErrors } = useContext(FormContext);

  const validate = () => {
    const newErrors = {};
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!/^\d{6}$/.test(formData.pincode))
      newErrors.pincode = "Pincode must be 6 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = () => {
    if (validate()) nextStep();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Address Info</h2>
      <div>
        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          onBlur={() => validate()}
          placeholder="City"
          className="p-2 border rounded w-full"
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
      </div>
      <div>
        <input
          name="state"
          value={formData.state}
          onChange={handleChange}
          onBlur={() => validate()}
          placeholder="State"
          className="p-2 border rounded w-full"
        />
        {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
      </div>
      <div>
        <input
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          onBlur={() => validate()}
          placeholder="Pincode"
          className="p-2 border rounded w-full"
        />
        {errors.pincode && (
          <p className="text-red-500 text-sm">{errors.pincode}</p>
        )}
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

export default Step2;
