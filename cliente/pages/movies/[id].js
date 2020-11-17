import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import axios from 'axios'

export default function MovieId() {
  const router = useRouter();
  const idx = router.query.id;

  console.log(router);
  console.log(idx)

  
  const [idUser, setIdUser] = useState({})

  const obtenerUser = async () => {
      const rex = await axios.get(`https://jsonplaceholder.typicode.com/users/${idx}`)
      setIdUser(rex.data)
      console.log(rex.data);
  }

  useEffect(() => {
    obtenerUser()
  }, [])



  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
        <div
          className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"
          style={{ maxWidth: "500px" }}
        >
          <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-32 h-32 -mt-16 mx-auto shadow-lg">
              <img
                src="https://randomuser.me/api/portraits/men/15.jpg"
                alt="d"
              />
            </div>
          </div>
          <div className="w-full mb-10">
            <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
              “
            </div>
            <p className="text-sm text-gray-600 text-center px-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              obcaecati laudantium recusandae, debitis eum voluptatem ad, illo
              voluptatibus temporibus odio provident.
            </p>
            <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
              ”
            </div>
          </div>
          <div className="w-full">
            <p className="text-md text-indigo-500 font-bold text-center">
              {idUser.name}
            </p>
            <p className="text-xs text-gray-500 text-center">@scott.windon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
