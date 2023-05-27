import React,{useEffect} from 'react'

import Banner from '../../components/main_page/banner'
import Infos from '../../components/main_page/infos'
import CheckLoginStatus from '../../components/CheckLoginStatus'

function Home() {

  return (
    <>
        <div>
            <Banner></Banner>
            <Infos></Infos>
        </div>

        <div className=' w-full flex justify-center'>
            <div className='w-3/4 min-h-screen bg-black max-[1000px]:w-full'></div>
        </div>

        <CheckLoginStatus></CheckLoginStatus>

    </>
  )
}

export default Home