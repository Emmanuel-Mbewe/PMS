import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PastorDetail() {
  const router = useRouter();
  const { id } = router.query; // Get the pastor's ID from the URL
  const [pastor, setPastor] = useState(null);

  useEffect(() => {
    if (id) {
      // Only fetch the data if id is available
      fetch(`/pastors.json`)
        .then((response) => response.json())
        .then((data) => {
          const pastorData = data.find((pastor) => pastor.id === parseInt(id));
          if (pastorData) {
            setPastor(pastorData);
          }
        })
        .catch((error) => {
          console.error('Error fetching pastor data:', error);
        });
    }
  }, [id]); // Re-fetch if id changes

  if (!pastor) {
    return <div>Loading...</div>;
  }

  // Handle long biographies by trimming and adding a "Read More" option
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => setIsReadMore(!isReadMore);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center mb-12 mt-11">
        <h1 className="text-4xl font-bold text-gray-800">
          {pastor.firstName} {pastor.lastName} - Full Details
        </h1>
      </header>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          <img
            src={pastor.profilePic}
            alt={`${pastor.firstName} ${pastor.lastName}`}
            className="w-32 h-32 rounded-full border-2 border-gray-300"
          />
          <div className="ml-6">
            <h2 className="text-3xl font-semibold text-gray-800">{pastor.firstName} {pastor.lastName}</h2>
            <p className="text-gray-500">Title: {pastor.title}</p>
            <p className="text-gray-500">Status: {pastor.status}</p>
            <p className="text-gray-500">Age: {pastor.age}</p>
            <p className="text-gray-500">Church: {pastor.churchName}</p>
            <p className="text-gray-500">Location: {pastor.location}</p>
            <p className="text-gray-500">Academic Qualifications: {pastor.academicQualifications}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Biography:</h3>
          <p className="text-gray-700 mt-2">
            {isReadMore ? pastor.biography : `${pastor.biography.slice(0, 200)}...`}
            <button
              className="text-blue-600 hover:underline mt-2 block"
              onClick={toggleReadMore}
            >
              {isReadMore ? 'Read Less' : 'Read More'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}