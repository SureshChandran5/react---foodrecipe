import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from './contex/Context'

const Navbar = () => {
  
   const {searchItem, setSearchItem, handSubmit, count} = useContext(GlobalContext);
   
  return (
    <nav className='flex justify-between item-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
       <Link to={'/'}><h2 className='text-2xl font-semibold'>Food Recipe</h2></Link>
       <form onSubmit={handSubmit}>
         <input 
            type='text'
            name='search'
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder='Enter Item'
            className='bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-green-100 focus:shadow-red-200'
        />
       </form>
       <ul className='flex gap-5'>
         <li>
            <Link to={'/'} className='text-black hover:text-gray-700 duration-300'>Home</Link>
         </li>
         <li>
            <Link to={'/Favorites'} className='text-black hover:text-gray-700 duration-300'>Favorites <sup>{count}</sup></Link>
         </li>
       </ul>
    </nav>
  )
}

export default Navbar
