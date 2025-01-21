import { useEffect, useState } from "react";
import Link from "next/link";

export default function Pastors() {
  const [pastors, setPastors] = useState([]);

  useEffect(() => {
    // Fetch the pastors' data from the JSON file
    fetch("/pastors.json")
      .then((response) => response.json())
      .then((data) => setPastors(data));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center mb-12 mt-11">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the Pastors Page</h1>
      </header>

      <main className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastors.map((pastor) => (
            <div
              key={pastor.id}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all"
            >
              <img
                src={pastor.profilePic}
                alt={`${pastor.firstName} ${pastor.lastName}`}
                className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-gray-300"
              />
              <h2 className="text-2xl font-semibold text-gray-700">
                {pastor.firstName} {pastor.lastName}
              </h2>
              <p className="text-gray-500 mt-2">{pastor.status}</p>
              <div className="mt-4">
                <Link href={`/pastors/${pastor.id}`}>
                  <button
                    className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all"
                  >
                    View
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}