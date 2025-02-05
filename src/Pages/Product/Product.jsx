import React, { useEffect, useState } from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'
import data from '../../Datas';
import ArchiveContentTitle from '../../Component/ArchiveContentTitle/ArchiveContentTitle';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import ProductBox from '../../Component/ProductBox/ProductBox';

function Product() {
  const [productItem, setProductItem] = useState(data);
  const { productParams } = useParams();
  const [productIndex, setProductIndex] = useState([]);

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
              <ProductBox />
            </div>

          </>
        )
      })}
    </>
  )
}

export default Product