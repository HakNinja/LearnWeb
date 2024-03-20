import React, { useEffect, useState } from 'react'
import Video from '../../components/shorts/Video'
import './Shorts.css'
import videos from '../../components/shorts/videos.json'

const Shorts = () => {

  // const [v, setV] = useState([]);

  // useEffect(()=>{
  //   setV(videos)
  // }, [])

  return (
    <div className='sapp'>
        <div className='sapp__videos '>
          {videos.videos.map((vid) => (
            <Video id={vid.id} location={vid.location} name={vid.name} description={vid.description} />
          ))}
        </div>
    </div>
  )
}

export default Shorts