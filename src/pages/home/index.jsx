import React from 'react'

import Banner from '../../components/banner'
import Infos from '../../components/infos'
import Footer from '../../layouts/footer'

function Home() {
  return (
    <>
        <div>
            <Banner></Banner>
            <Infos></Infos>
        </div>

        <div className=' w-full flex justify-center'>
            <div className='w-3/4 min-h-screen bg-black'></div>
        </div>

        <div>
            <Footer></Footer>
        </div>
    </>
  )
}

export default Home