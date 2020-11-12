import React from 'react'
import {FaRegPlayCircle} from 'react-icons/fa'

function Lista() {
    return (
        <div className="mx-4 ">
        <h1 className="text-gray-400 text-2xl mt-4 pl-4">Cantante</h1>
        <ul className="mt4 flex max-w-full overflow-x-scroll">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ev, i) => (
            <li key={i} className="nav-link flex-col ">
              <div
                className="w-40 h-40 bg-cover flex items-end  bg-gray-500 m-4 rounded-xl border
                 border-gray-500 hover:shadow-outline "
                style={{
                  backgroundImage:
                    "url(https://resources.tidal.com/images/496e5798/1b3f/4879/a968/56d71cf67e64/640x640.jpg)",
                }}
              >
                <div className="h-24 w-full bg-transparent flex">
                    <button className='ml-2  rounded-full focus:outline-none' onClick={() => console.log('peru') } >
                        <FaRegPlayCircle className='rounded-full w-8 h-8 bg-white hover:bg-blue-400' />
                    </button>
                </div>
              </div>
              <div>
                <h4 className="text-gray-400">Britney</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default Lista
