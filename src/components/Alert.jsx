import React from 'react'

const Alert = ({text, type}) => {
  return (
    <div className="absolute top-12 left-0 right-0 justify-center flex sm:top-10">
        <div className={`${type === 'danger' ? "bg-red-700" : "bg-blue-700"} p-2 rounded-md flex gap-2 items-center`}>
            <p className={`${type === 'danger' ? "bg-red-500" : "bg-blue-500"} text-indigo-100 font-semibold uppercase rounded-lg px-2 py-1 text-xs md:text-sm`}> { type === 'danger' ? 'Failed' : "Success"} </p>
            <div className="text-indigo-100 text-xs md:text-sm">{text}</div>
        </div>
    </div>
  )
}

export default Alert