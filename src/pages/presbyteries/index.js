import { useEffect, useState } from "react";

const Presbyteries = () => {
  const [presbyteries, setPresbyteries] = useState([]);

  useEffect(() => {
    // Fetch the presbyteries' data from the JSON file
    fetch("/presbyteries.json")
      .then((response) => response.json())
      .then((presbyteries) => setPresbyteries(presbyteries));
  }, []);

  if (presbyteries.length === 0) {
    return <div>Loading...</div>; // Show loading message until data is fetched
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center mb-12 mt-11">
        <h1 className="text-4xl font-bold text-gray-800">Our Presbyteries</h1>
      </header>

      <main className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dynamically render the presbyteries */}
          {presbyteries.map((presbytery) => (
            <div key={presbytery.id} className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src={presbytery.profilePic}
                alt={presbytery.name}
                className="w-20 h-20 mx-auto mb-4 rounded-full"
              />
              <h2 className="text-2xl font-semibold text-gray-700">{presbytery.name}</h2>
              <p className="text-gray-500 mt-2">Location: {presbytery.location}</p>
              <p className="text-gray-500 mt-2">Churches: {presbytery.churches}</p>
              <p className="text-gray-500 mt-2">Pastors: {presbytery.pastors}</p>
              <p className="text-gray-500 mt-2">Status: {presbytery.status}</p>
              <p className="text-gray-700 mt-4">{presbytery.description}</p>
              <p className="text-gray-500 mt-4">Moderator: {presbytery.moderator}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Presbyteries;
