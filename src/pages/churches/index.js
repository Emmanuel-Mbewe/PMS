import { useEffect, useState } from "react";

const Churches = () => {
  const [churches, setChurches] = useState([]);

  useEffect(() => {
    // Fetch the churches' data from the JSON file
    fetch("/churches.json")
      .then((response) => response.json())
      .then((churches) => setChurches(churches));
  }, []);

  if (churches.length === 0) {
    return <div>Loading...</div>; // Show loading message until data is fetched
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center mb-12 mt-11">
        <h1 className="text-4xl font-bold text-gray-800">Our Churches</h1>
      </header>

      <main className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dynamically render the churches */}
          {churches.map((church) => (
            <div key={church.id} className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src={church.profilePic}
                alt={church.name}
                className="w-20 h-20 mx-auto mb-4 rounded-full"
              />
              <h2 className="text-2xl font-semibold text-gray-700">{church.name}</h2>
              <p className="text-gray-500 mt-2">Location: {church.location}</p>
              <p className="text-gray-500 mt-2">Capacity: {church.capacity}</p>
              <p className="text-gray-500 mt-2">Status: {church.status}</p>
              <p className="text-gray-700 mt-4">{church.description}</p>
              <p className="text-gray-500 mt-4">Pastor: {church.pastor}</p>
              <div className="text-gray-500 mt-4">
                <h3 className="text-lg font-semibold">Services:</h3>
                <ul>
                  {church.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Churches;
