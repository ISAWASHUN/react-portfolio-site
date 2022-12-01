import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 border-t border-white">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" className="hover:underline">Isawa Shun</a>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">Home</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Skills</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>
    </div>
  )
}

export default Footer
