import React from 'react'
import {FaRegPlayCircle} from 'react-icons/fa'



const datax = [
  {image: 'https://resources.tidal.com/images/496e5798/1b3f/4879/a968/56d71cf67e64/640x640.jpg'},
  {image: 'https://resources.tidal.com/images/cf9b7279/f62f/4702/9fc2/45fcaf841842/640x640.jpg'},
  {image: 'https://resources.tidal.com/images/7ba06c5f/1a30/4730/bead/d2e4b666ea73/320x320.jpg'},
  {image: 'https://resources.tidal.com/images/b893e89c/4439/4543/87c1/2f86f2050784/320x320.jpg'},
  {image: 'https://resources.tidal.com/images/f14095bc/08eb/4a3c/8d9f/cdc03772251a/320x320.jpg'},
  {image: 'https://resources.tidal.com/images/06ce0db0/1300/4826/9eed/14204695999c/320x320.jpg'},
  {image: 'https://resources.tidal.com/images/3bf1ff9d/01e5/435e/84a4/56d5b05f8775/320x320.jpg'},
  {image: 'https://resources.tidal.com/images/74eac2e1/87c1/4874/9773/22d0d5c96177/320x320.jpg'},
  
]



function Lista() {
    return (
        <div className="mx-4 ">
        <h1 className="text-gray-400 text-2xl mt-4 pl-4">Music 2020</h1>
        <ul className="mt4 flex max-w-full overflow-x-auto">
          {datax.map((ev, i) => (
            <li key={i} className="nav-link flex-col ">
              <div
                className="w-40 h-40 bg-cover flex items-end  bg-gray-500 m-4 rounded-xl border
                 border-gray-500 hover:shadow-outline hover:opacity-75 "
                style={{
                  backgroundImage:
                  `url(${ev.image})`,
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
