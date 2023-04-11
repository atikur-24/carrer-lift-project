import React from "react";
import Banner from "./Home/Banner";
import Category from "./Home/Category";
import Features from "./Home/Features";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const features = useLoaderData([]);

  return (
    <>
      <Banner />
      <main className="px-12 pt-10 md:px-32 mb-32">
        <Category />

        <section>
          <h2 className="text-center text-5xl font-extrabold">Featured Jobs</h2>
          <p className="text-[#A3A3A3] mb-8 mt-4 text-center">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {features?.map((feature) => (
              <Features key={feature.id} feature={feature} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <button className="btn h-16">See All Jobs</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
