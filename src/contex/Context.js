import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const GlobalContext = createContext(null);


export default function GlobalState({children}){

   const [searchItem, setSearchItem] = useState("");
   const [loading, setLoading] = useState(false);
   const [recipeList , setRecipeList] = useState([]);
   const [favoriteList, setFavoriteList] = useState([]);
   const [count, setCount] = useState(0);
   const navigate = useNavigate()

  async function handSubmit(e){
    e.preventDefault();
    setLoading(true);
    try{
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}`);

      const result =await res.json();
      if(result.data.recipes){
        setRecipeList(result.data.recipes)
        setSearchItem('')
        setLoading(false)
        navigate('/');
      }
    }catch(err){
       console.log(err.message);
       setSearchItem('')
       setLoading(false)
    }
  }

  function handleFavoriteList(getCurrentItem){
    let intialCount = 0;
    let cpyFavoriteList = [... favoriteList];
    let index = cpyFavoriteList.findIndex((item) => item.id === getCurrentItem.id)
    if(index === -1){
      cpyFavoriteList.push(getCurrentItem)
      intialCount = cpyFavoriteList.length;
    }else{
      cpyFavoriteList.splice(index)
    }
    setFavoriteList(cpyFavoriteList)
    setCount(intialCount);
  }

    return(
        <GlobalContext.Provider
          value={{searchItem, setSearchItem, handSubmit, loading, recipeList, handleFavoriteList, favoriteList, count}}
        >
            {children}
        </GlobalContext.Provider>
    )
}