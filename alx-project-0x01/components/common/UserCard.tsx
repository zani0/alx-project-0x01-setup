// components/UserCard.tsx
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>

      <div className="mb-4 text-gray-600">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> <a href={`https://${website}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{website}</a></p>
      </div>

      <div className="mb-4 text-gray-600">
        <p><strong>Address:</strong></p>
        <p>{address.suite}, {address.street}</p>
        <p>{address.city}, {address.zipcode}</p>
      </div>

      <div className="text-gray-600">
        <p><strong>Company:</strong> {company.name}</p>
        <p className="italic text-sm">"{company.catchPhrase}"</p>
      </div>

      <div className="mt-4 text-sm text-gray-400 text-right">
        <span>User ID: {id}</span>
      </div>
    </div>
  );
}

export default UserCard;
