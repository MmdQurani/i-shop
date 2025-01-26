import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import data from '../../Datas';
import ArchiveContentTitle from '../../Component/ArchiveContentTitle/ArchiveContentTitle';

function Product() {
  const [productItem, setProductItem] = useState(data);
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const { productParams } = useParams();
  const [productIndex, setProductIndex] = useState([])

  useEffect(() => {
    setProductIndex(productItem.filter(item => item.id == productParams))
  }, [])

  return (
    <>
      {productIndex.map(item => {
        return (
          <>

            <div className='product'>
              <ArchiveContentTitle pageName={item.name} />
            </div>

          </>
        )
      })}
    </>
  )
}

export default Product