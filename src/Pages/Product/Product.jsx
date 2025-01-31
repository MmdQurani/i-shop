import React, { useEffect, useState } from 'react'
import './Product.css'
import { useLocation, useParams } from 'react-router-dom'
import data from '../../Datas';
import ArchiveContentTitle from '../../Component/ArchiveContentTitle/ArchiveContentTitle';
import { InnerImageZoom } from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import SampleImgProduct from '../../Component/SampleImgProduct/SampleImgProduct';
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

              <div className="product-box bg-main card py-4 px-4 mt-4">
                <div className="row row-gap-5" dir='rtl'>
                  <div className="col-lg-5 col-12">
                    <SampleImgProduct />
                  </div>
                  <div className="col-lg-7 col-12">
                    <div className='bg-danger'>one</div>
                  </div>
                </div>
              </div>
            </div>

          </>
        )
      })}
    </>
  )
}

export default Product