import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from './contex/Context';

const Details = () => {

    const [recipeDetail, setRecipeDetail] = useState(null);
    const { favoriteList, handleFavoriteList } = useContext(GlobalContext);

    const {id} = useParams();
    
    useEffect(() => {
      async function getRecipeDetail() {
        try{
          const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
          const data = await response.json();
          if(data?.data) {
            setRecipeDetail(data.data);
          }
        }catch(err){
          console.log(err.message);
        }
      }
      getRecipeDetail()
    },[])

    console.log(recipeDetail,'recipeDetail');

  return (
    <>
    {
      recipeDetail && recipeDetail.recipe ? 
      (
    <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
       <div className='row-start-2 lg:row-start-auto' >
         <div className='h-96 overflow-hidden rounded-xl group'>
            <img 
              src={recipeDetail?.recipe.image_url}
              alt='recipe-item'
              className='w-full h-full object-cover block group-hover:scale-105 duration-300'
            />
         </div>
       </div>
       <div className='flex flex-col gap-3'>
         <span className='text-sm text-cyan-700 font-medium'>{recipeDetail.recipe.publisher}</span>
         <h3 className='font-bold text-2xl truncate text-black'>
            {recipeDetail.recipe.title}
         </h3>
         <div>
            <button onClick={()=>handleFavoriteList(recipeDetail.recipe)} className='p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white'>
              {
                favoriteList.findIndex((item) => item.id === recipeDetail.recipe.id) !== -1 ? 
                'Remove From Favorites'
                :
                "Save as Favorites" 
              }
            </button>
         </div>
         <div>
          <span className='text-2xl font-semibold text-black'>Ingredients:</span>
          <ul className='flex flex-col gap-3'>
            {
              recipeDetail.recipe.ingredients.map((item) => (
                <li>
                  <span className='text-2xl font-semibold text-black'>
                    {item.quantity} {item.unit}
                  </span>
                  <span className='text-2xl font-semibold text-black'>
                     {item.description}
                  </span>
                </li>
              ))
            }
          </ul>
         </div>
       </div>
    </div>
    ) : 
    <p>Nothing To Display</p>
  }
    </>
  )
}

export default Details;
