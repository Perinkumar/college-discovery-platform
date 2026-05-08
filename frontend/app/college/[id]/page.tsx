"use client";

import Image from "next/image";
import { use, useEffect, useState } from "react";

interface College {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  fees: number;
  rating: number;
  avgPackage: number;
  highestPackage: number;
  courses: string;
  placementPercent: number;
}

interface CollegeDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export default function CollegeDetails({
  params,
}: CollegeDetailsProps) {

  const { id } = use(params);

  const [college, setCollege] = useState<College | null>(null);

  useEffect(() => {

    async function fetchCollege() {

      try {

        const res = await fetch(
          `http://localhost:5000/colleges/${id}`
        );

        const data = await res.json();

        setCollege(data);

      } catch (error) {
        console.log(error);
      }
    }

    fetchCollege();

  }, [id]);

  if (!college) {
    return (
      <div className="p-10 text-3xl">
        Loading...
      </div>
    );
  }

  return (

    <main className="min-h-screen bg-gray-100 p-8 pt-28">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

         <div className="relative w-full h-64 overflow-hidden rounded-t-3xl">

          <Image
            src={college.image}
            alt={college.name}
            fill
            className="object-cover"
             priority
          />

        </div>

        <div className="p-10">

          <h1 className="text-5xl font-extrabold mb-4">
            {college.name}
          </h1>

          <p className="text-2xl text-gray-600 mb-6">
            📍 {college.location}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {college.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-gray-100 p-6 rounded-2xl">

              <h2 className="text-2xl font-bold mb-3">
                Fees
              </h2>

              <p className="text-xl">
                ₹{college.fees}
              </p>

            </div>

            <div className="bg-gray-100 p-6 rounded-2xl">

              <h2 className="text-2xl font-bold mb-3">
                Rating
              </h2>

              <p className="text-xl">
                ⭐ {college.rating}
              </p>

            </div>

            <div className="bg-gray-100 p-6 rounded-2xl">

              <h2 className="text-2xl font-bold mb-3">
                Average Package
              </h2>

              <p className="text-xl">
                ₹{college.avgPackage}
              </p>

            </div>

            <div className="bg-gray-100 p-6 rounded-2xl">

              <h2 className="text-2xl font-bold mb-3">
                Highest Package
              </h2>

              <p className="text-xl">
                ₹{college.highestPackage}
              </p>

            </div>

          </div>

          <div className="mt-10 bg-gray-100 p-6 rounded-2xl">

            <h2 className="text-3xl font-bold mb-4">
              Courses Offered
            </h2>

            <p className="text-lg">
              {college.courses}
            </p>

          </div>

          <div className="mt-10 bg-gray-100 p-6 rounded-2xl">

            <h2 className="text-3xl font-bold mb-4">
              Placements
            </h2>

            <p className="text-lg mb-2">
              Placement Percentage: {college.placementPercent}%
            </p>

          </div>

        </div>

      </div>

    </main>

  );
}