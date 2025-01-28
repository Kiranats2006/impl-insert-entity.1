import React from "react";

const AddBook = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <form className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">
          Add a New Book
        </h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter book title"
            className="w-full rounded-md border border-gray-300 p-2 text-sm text-gray-700 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Author
          </label>
          <input
            type="text"
            placeholder="Enter author name"
            className="w-full rounded-md border border-gray-300 p-2 text-sm text-gray-700 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            placeholder="Enter book description"
            className="w-full rounded-md border border-gray-300 p-2 text-sm text-gray-700 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Cover Image URL
          </label>
          <input
            type="url"
            placeholder="Enter image URL"
            className="w-full rounded-md border border-gray-300 p-2 text-sm text-gray-700 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-green-500 p-2 text-white transition duration-300 hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
