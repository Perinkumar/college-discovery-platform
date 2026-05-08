"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface College {
  id: number;
  name: string;
  location: string;
  fees: number;
  rating: number;
  avgPackage: number;
  image: string;
  description: string;
}

export default function Home() {

  const [selected, setSelected] = useState<College[]>([]);
  const [colleges, setColleges] = useState<College[]>([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {

    async function fetchColleges() {

      const res = await fetch(
        `http://localhost:5000/colleges?search=${search}&location=${location}`
      );

      const data = await res.json();

      setColleges(data);
    }

    fetchColleges();

  }, [search, location]);

  function addToCompare(college: College) {

    const exists = selected.find(
      (item) => item.id === college.id
    );

    if (!exists && selected.length < 2) {
      setSelected([...selected, college]);
    }
  }

  function removeCompare(id: number) {

    setSelected(
      selected.filter((item) => item.id !== id)
    );
  }

  return (

    <main className="min-h-screen bg-gray-100">

      {/* NAVBAR */}

      <nav className="bg-black text-white px-8 py-5 flex justify-between items-center shadow-lg">

        <h1 className="text-3xl font-bold">
          CollegeHub
        </h1>

        <div className="flex gap-6">

          <button className="hover:text-gray-300">
            Home
          </button>

          <button className="hover:text-gray-300">
            Compare
          </button>

          <button className="hover:text-gray-300">
            Saved
          </button>

        </div>

      </nav>

      {/* HEADER */}

      <div className="text-center py-12 px-6">

        <h1 className="text-5xl font-bold mb-4">
          College Discovery Platform
        </h1>

        <p className="text-xl text-gray-600">
          Explore top colleges across India
        </p>

      </div>

      {/* SEARCH */}

      <div className="max-w-6xl mx-auto px-4 mb-10 flex flex-col md:flex-row gap-4">

        <input
          type="text"
          placeholder="Search college..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300"
        />

        <input
          type="text"
          placeholder="Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300"
        />

      </div>

      {/* COMPARE */}

      {selected.length === 2 && (

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Compare Colleges
          </h2>

          <table className="w-full border">

            <tbody>

              <tr>
                <td className="border p-3 font-bold">
                  College
                </td>

                <td className="border p-3">
                  {selected[0].name}
                </td>

                <td className="border p-3">
                  {selected[1].name}
                </td>
              </tr>

              <tr>
                <td className="border p-3 font-bold">
                  Fees
                </td>

                <td className="border p-3">
                  ₹{selected[0].fees}
                </td>

                <td className="border p-3">
                  ₹{selected[1].fees}
                </td>
              </tr>

              <tr>
                <td className="border p-3 font-bold">
                  Rating
                </td>

                <td className="border p-3">
                  ⭐ {selected[0].rating}
                </td>

                <td className="border p-3">
                  ⭐ {selected[1].rating}
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      )}

      {/* CARDS */}

      <div className="max-w-7xl mx-auto px-4 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

          {colleges.map((college) => (

            <div
              key={college.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >

              <Link href={`/college/${college.id}`}className="block">

                <div className="relative w-full h-52">

                  <Image
                    src={college.image}
                    alt={college.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                </div>

                <div className="p-5">

                  <h2 className="text-3xl font-bold mb-3">
                    {college.name}
                  </h2>

                  <p className="text-gray-600 mb-2">
                    📍 {college.location}
                  </p>

                  <p className="text-gray-700 mb-4">
                    {college.description}
                  </p>

                  <div className="space-y-2">

                    <p>
                      💰 Fees: ₹{college.fees}
                    </p>

                    <p>
                      ⭐ Rating: {college.rating}
                    </p>

                    <p>
                      📈 Avg Package: ₹{college.avgPackage}
                    </p>

                  </div>

                </div>

              </Link>

              <div className="flex gap-3 px-5 pb-5">

                <button
  type="button"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCompare(college);
  }}
  className="bg-black text-white px-4 py-2 rounded-xl"
>
  Compare
</button>

                <button
  type="button"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    removeCompare(college.id);
  }}
  className="bg-red-500 text-white px-4 py-2 rounded-xl"
>
  Remove
</button>

              </div>

            </div>

          ))}

        </div>

      </div>
<footer className="bg-black text-white text-center py-6 mt-16">

  <h2 className="text-2xl font-bold mb-2">
    CollegeHub
  </h2>

  <p className="text-gray-300">
    College Discovery Platform
  </p>

  <p className="text-gray-400 mt-2">
    © 2026 Perinkumar Chaudhari
  </p>

</footer>
    </main>

  );
}