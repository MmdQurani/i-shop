import React, { useEffect, useState } from 'react'
import './Product.css'
import { useLocation, useParams } from 'react-router-dom'
import data from '../../Datas';
import ArchiveContentTitle from '../../Component/ArchiveContentTitle/ArchiveContentTitle';
import { InnerImageZoom } from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
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

              <div className="product-box bg-main card py-4 px-4 mt-4">
                <div className="row row-gap-5" dir='rtl'>
                  <div className="col-lg-5 col-12">
                    <div className='bg-main d-flex flex-column row-gap-4 justify-content-center align-items-center w-100 h-100'>
                      <InnerImageZoom
                        src="../assets/img/Products/4.png"
                        zoomSrc="../assets/img/Products/4.png"
                        zoomType="hover"
                        zoomPreload={true}
                        zoomScale={1.8}
                      />

                      <div className='row Subsamples-img-parent column-gap-4 row-gap-3 w-100 justify-content-center'>
                        <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-2 col-sm-3 col-3 p-0'>
                          <div className='Subsamples-img w-100 h-100 p-1 rounded-2'>
                            <img src="../assets/img/Products/4.png" className='w-100' alt="" />
                          </div>
                        </div>
                        <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-2 col-sm-3 col-3 p-0'>
                          <div className='Subsamples-img w-100 h-100 p-1 rounded-2'>
                            <img src="../assets/img/Products/4.png" className='w-100' alt="" />
                          </div>
                        </div>
                        <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-2 col-sm-3 col-3 p-0'>
                          <div className='Subsamples-img w-100 h-100 p-1 rounded-2'>
                            <img src="../assets/img/Products/4.png" className='w-100' alt="" />
                          </div>
                        </div>
                        <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-2 col-sm-3 col-3 p-0'>
                          <div className='Subsamples-img w-100 h-100 p-1 rounded-2'>
                            <img src="../assets/img/Products/4.png" className='w-100' alt="" />
                          </div>
                        </div>
                        <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-2 col-sm-3 col-3 p-0'>
                          <div className='Subsamples-img w-100 h-100 p-1 rounded-2'>
                            <img src="../assets/img/Products/4.png" className='w-100' alt="" />
                          </div>
                        </div>
                        <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-2 col-sm-3 col-3 p-0'>
                          <div className='Subsamples-img w-100 h-100 p-1 rounded-2'>
                            <img src="../assets/img/Products/4.png" className='w-100' alt="" />
                          </div>
                        </div>
                      </div>

                    </div>
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