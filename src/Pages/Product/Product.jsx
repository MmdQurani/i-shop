import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import data from '../../Datas';

function Product() {
  const [productItem , setProductItem] = useState(data);
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const {productParams} = useParams();
  const [productIndex , setProductIndex] = useState([])

  useEffect( () => {
    setProductIndex(productItem.filter(item => item.id == productParams))
  } , [])

  return (
    <>
    <div className='product'>
      {productIndex.map(item => {
        return(
          <>
          <div>{item.name}</div>
          </>
        )
      })}
    </div>
    </>
  )
}

export default Product