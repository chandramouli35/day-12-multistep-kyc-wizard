import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function Step1({ nextStep }) {
  const { formData, setFormData, errors, setErrors } = useContext(FormContext);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.dob) newErrors.dob = "DOB is required";
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
      <h2 className="text-2xl font-semibold">Personal Details</h2>
      <div>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={() => validate()}
          placeholder="Name"
          className="p-2 border rounded w-full"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div>
        <input
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          onBlur={() => validate()}
          className="p-2 border rounded w-full"
        />
        {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
      </div>
      <div>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => validate()}
          placeholder="Email"
          className="p-2 border rounded w-full"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
}

export default Step1;
