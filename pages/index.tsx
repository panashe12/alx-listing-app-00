// pages/index.tsx
import Image from "next/image";
import { HERO_BG, FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";
import { useState } from "react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("");

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src={HERO_BG}
          alt="Hero Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 py-8 flex flex-wrap gap-3 justify-center">
        {FILTERS.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            active={activeFilter === filter}
            onClick={() =>
              setActiveFilter(activeFilter === filter ? "" : filter)
            }
          />
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-10">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <div
            key={property.id}
            className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={property.image}
              alt={property.name}
              width={400}
              height={250}
              className="object-cover w-full h-56"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{property.name}</h2>
              <p className="text-gray-600">${property.price}/night</p>
              <p className="text-yellow-500">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">ALX Listing Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Cozy Apartment"
          description="A cozy 2-bedroom apartment near the beach."
          image="/assets/placeholder.jpg"
        />
        <Card
          title="Luxury Villa"
          description="Spacious villa with private pool and garden."
          image="/assets/placeholder.jpg"
        />
        <Card
          title="Modern Loft"
          description="Stylish loft in the heart of the city."
          image="/assets/placeholder.jpg"
        />
      </div>

      <div className="mt-6">
        <Button label="View More Listings" onClick={() => alert("Coming soon!")} />
      </div>
    </div>
  );
}
