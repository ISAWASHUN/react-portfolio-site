import React from 'react'

const header = () => {
  return (
    <div>
      <title>My Portfolio</title>
       {/* header-section */}
        <header className='text-gray-700 border-b border-gray-700'>
          <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
            <a href="#" className='text-xl ml-3 mb-4 md:mb-0'>
              <span>My PortFolio</span>
            </a>
            <nav className='md:ml-auto text-base '>
              <a href="#home" className='mr-5 hover:text-blue-400'>Home</a>
              <a href="#About" className='mr-5 hover:text-blue-400'>About</a>
              <a href="#Skills" className='mr-5 hover:text-blue-400'>Skills</a>
              <a href="#Contact" className=' hover:text-blue-400'>Contact</a>
            </nav>
          </div>
        </header>
    </div>
  )
}

export default header
