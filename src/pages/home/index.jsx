import React from 'react'

import Banner from '../../components/main_page/banner'
import Infos from '../../components/main_page/infos'

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
    </>
  )
}

export default Home