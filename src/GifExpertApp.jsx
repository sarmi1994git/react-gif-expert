import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (item) => {
    if (categories.includes(item)) {
      return;
    }
    const categoriesAux = [...categories];
    categoriesAux.push(item);
    setCategories(categoriesAux);
  }

  return (
    <>
        <h1>Gif App</h1>
        <AddCategory
          onNewCategory={onAddCategory} />
        {
          categories.map(category => {
            return (
              <GifGrid
                key={category}
                category={category} />
            );
          })
        }
    </>
  )
}
