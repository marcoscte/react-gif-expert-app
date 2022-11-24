import React, { useState } from 'react';
import { AddCategory,GifGrid } from './components';
import './styles.css';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Naruto']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    //setCategories(categories.concat('Valorant')); Valido pero recomendado:
    setCategories([newCategory, ...categories]);
  }


  return (
    <>

      {/* Title */}
      <h1>Gif Expert App</h1>
      {/* Input */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* categories */}

      {categories.map(category => (

        <GifGrid key={category} category={category} />

      )
      )}


    </>
  )
}
