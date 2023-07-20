'use client'

import { useState } from "react";

const CreateForm = () => {
    const  [results, setResults]  = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const JSONData = JSON.stringify(data)
        const endpoint = "/api/links/"

        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONData
        }
        const response = await fetch(endpoint, options)
        const result = await response.json();
        console.log(result);
        setResults(result)
    }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          name="url"
          defaultValue="https://github.com/Baysah/jref"
          placeholder="Your URL to shorten"
          className="rounded-md py-2 px-4"
        />
        <button
          type="submit"
          className="rounded-md bg-slate-500 text-white py-2 px-4 hover:bg-slate-400 transition-all"
        >
          Submit
        </button>
      </form>
      {results && JSON.stringify(results)}
    </>
  );
}

export default CreateForm