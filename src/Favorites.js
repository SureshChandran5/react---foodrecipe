import React, { useContext } from 'react'
import { GlobalContext } from './contex/Context';
import RecipeItem from './RecipeItem';

const Favorites = () => {
  const { favoriteList } = useContext(GlobalContext);
   
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-container gap-10'>
       
        {
            favoriteList.map((item) => <RecipeItem 
                                          item={item}
                                          key={item.id}

            />)
            
       }
    </div>
  )
}

export default Favorites
