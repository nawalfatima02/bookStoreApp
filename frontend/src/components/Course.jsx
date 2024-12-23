import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto overflow-hidden">

      <div className="mt-28 items-center justify-center text-center">

          <h1 className="text-2xl md:text-4xl ">
            We are deligated to have{" "}
            <span className="text-pink-500"> you here! </span>{" "}
          </h1>
          <p className="mt-12">
            We are delighted to have you here and extend a warm welcome to our
            community. Your presence brings fresh energy and excitement, and we
            are eager to embark on this journey together. Whether you’re here to
            learn, collaborate, or simply explore, your contribution will be
            valued and celebrated.We believe that every individual adds a unique
            perspective, enriching our collective experience.Once again, we’re
            thrilled to have you here and look forward to the amazing things
            we’ll achieve together!
          </p>
          <Link to='/'>
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-600">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
