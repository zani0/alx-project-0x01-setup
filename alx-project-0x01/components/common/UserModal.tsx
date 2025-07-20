import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<Omit<UserData, "id">>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    path: string[]
  ) => {
    setFormData((prev) => {
      const updated = { ...prev };
      let current: any = updated;

      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }

      current[path[path.length - 1]] = e.target.value;
      return updated;
    });
  };

  const handleSubmit = () => {
    const newUser: UserData = {
      id: Date.now(),
      ...formData,
    };
    onSubmit(newUser);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl shadow-xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <input type="text" placeholder="Name" className="input" onChange={(e) => handleChange(e, ["name"])} />
          <input type="text" placeholder="Username" className="input" onChange={(e) => handleChange(e, ["username"])} />
          <input type="email" placeholder="Email" className="input" onChange={(e) => handleChange(e, ["email"])} />
          <input type="text" placeholder="Phone" className="input" onChange={(e) => handleChange(e, ["phone"])} />
          <input type="text" placeholder="Website" className="input" onChange={(e) => handleChange(e, ["website"])} />

          <input type="text" placeholder="Street" className="input" onChange={(e) => handleChange(e, ["address", "street"])} />
          <input type="text" placeholder="Suite" className="input" onChange={(e) => handleChange(e, ["address", "suite"])} />
          <input type="text" placeholder="City" className="input" onChange={(e) => handleChange(e, ["address", "city"])} />
          <input type="text" placeholder="Zipcode" className="input" onChange={(e) => handleChange(e, ["address", "zipcode"])} />

          <input type="text" placeholder="Latitude" className="input" onChange={(e) => handleChange(e, ["address", "geo", "lat"])} />
          <input type="text" placeholder="Longitude" className="input" onChange={(e) => handleChange(e, ["address", "geo", "lng"])} />

          <input type="text" placeholder="Company Name" className="input" onChange={(e) => handleChange(e, ["company", "name"])} />
          <input type="text" placeholder="Catch Phrase" className="input" onChange={(e) => handleChange(e, ["company", "catchPhrase"])} />
          <input type="text" placeholder="Business" className="input" onChange={(e) => handleChange(e, ["company", "bs"])} />
        </div>

        <div className="flex justify-end mt-6 gap-4">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleSubmit}>Add User</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
