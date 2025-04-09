import React from 'react'

export default function Filterbar({ filterData, setCategory }) {

  function filterHandler(title) {
    setCategory(title)
  }

  return (
    <div className="w-full max-w-3xl flex flex-wrap justify-center sm:justify-between items-center gap-3 p-4 rounded-xl bg-violet-700 shadow-lg">
      {
        filterData.map((option) => (
          <button
            key={option.id}
            onClick={() => filterHandler(option.title)}
            className="px-4 py-2 font-bold rounded-md text-black bg-slate-100 border-2 border-black hover:bg-black hover:text-violet-500 hover:border-slate-100 transition-all duration-200"
          >
            {option.title}
          </button>
        ))
      }
    </div>
  )
}