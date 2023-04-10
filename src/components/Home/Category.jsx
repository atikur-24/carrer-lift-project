import React, { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section className="my-32">
      <h3 className="text-center text-5xl font-extrabold">Job Category List</h3>
      <p className="text-[#A3A3A3] mb-8 mt-4 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-[#F9F9FF] p-10 rounded-lg">
            <img src={category.logo} alt="logo" />
            <p className="text-xl font-bold pt-8">{category.category_name}</p>
            <p className="text-[#A3A3A3] pt-2">{category.jobs_available} Jobs Available</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
