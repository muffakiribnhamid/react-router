import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/muffakiribnhamid')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
        


    // },[])


  return (
      <div className='flex justify-center p-4 m-4'>
          <div className='text-center p-5 bg-slate-500 text-4xl underline text-white hover:text-red-400 cursor-pointer'>Github Followers : {data.followers}</div>
          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
              <img
                  className="w-40 rounded-full hover:blur-sm cursor-pointer"
                  src={data.avatar_url}
                  alt=""
              />
          </a>
      </div>

  )
}

export default Github

export const githubInfoLoader = async () => {
    const resp = await fetch(
        'https://api.github.com/users/muffakiribnhamid'
    )
    return resp.json()
}