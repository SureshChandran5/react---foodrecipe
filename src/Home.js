import React, { useContext } from 'react'
import { GlobalContext } from './contex/Context'
import RecipeItem from './RecipeItem';

const Home = () => {

    const {loading, recipeList} = useContext(GlobalContext);
    
    if(loading){
        return(
            <div>
                Loading... Please wait.,
            </div>
        )
    }
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-container gap-10'>
       {
        recipeList && recipeList.length > 0 ? 
            recipeList.map((item) => <RecipeItem 
                                          item={item}
                                          key={item.id}
            />)
            :
            <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing to Show.., Please search Something else.,</p> 
       }
    </div>
  )
}

export default Home
