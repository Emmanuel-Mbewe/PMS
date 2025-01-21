import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PastorDetail() {
  const router = useRouter();
  const { id } = router.query; // Get the pastor's ID from the URL

  const [pastor, setPastor] = useState(null);
  const [pastors, setPastors] = useState([]);
  const [isReadMore, setIsReadMore] = useState(false);

  useEffect(() => {
    // Fetch all pastors data
    fetch('/pastors.json')
      .then((response) => response.json())
      .then((data) => {
        setPastors(data);

        // Find the current pastor by ID
        if (id) {
          const currentPastor = data.find((pastor) => pastor.id === parseInt(id, 10));
          setPastor(currentPastor);
        }
      })
      .catch((error) => console.error('Error fetching pastor data:', error));
  }, [id]);

  // Determine the previous and next pastors
  const currentIndex = pastors.findIndex((p) => p.id === parseInt(id, 10));
  const previousPastor = currentIndex > 0 ? pastors[currentIndex - 1] : null;
  const nextPastor = currentIndex < pastors.length - 1 ? pastors[currentIndex + 1] : null;

  const toggleReadMore = () => setIsReadMore(!isReadMore);

  if (!pastor) {
    return <div>Loading...</div>;
  }

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
            <h2 className="text-3xl font-semibold text-gray-800">
              {pastor.firstName} {pastor.lastName}
            </h2>
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

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          {previousPastor && (
            <button
              onClick={() => router.push(`/pastors/${previousPastor.id}`)}
              className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all"
            >
              ← Previous: {previousPastor.firstName} {previousPastor.lastName}
            </button>
          )}
          {nextPastor && (
            <button
              onClick={() => router.push(`/pastors/${nextPastor.id}`)}
              className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all"
            >
              Next: {nextPastor.firstName} {nextPastor.lastName} →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
