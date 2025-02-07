import React, { useEffect, useState } from 'react'
import './Product.css'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import data from '../../Datas';
import ArchiveContentTitle from '../../Component/ArchiveContentTitle/ArchiveContentTitle';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import ProductBox from '../../Component/ProductBox/ProductBox';
import FeatureOptions from '../../Component/FeatureOptions/FeatureOptions';
import ReviewProduct from '../../Component/ReviewProduct/ReviewProduct';
import BannerNewProduct from '../../Component/ProductSlide/BannerNewProduct/BannerNewProduct';
import ProductSlide from '../../Component/ProductSlide/ProductSlide';
import { SwiperSlide } from 'swiper/react';
import BoxCards from '../../Component/BoxCards/BoxCards';

function Product() {
  const [productItem, setProductItem] = useState(data);
  const { productParams } = useParams();
  const [productIndex, setProductIndex] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setProductIndex(productItem.filter(item => item.id == productParams))
  }, [])

  return (
    <>
      {productIndex.map(item => {
        return (
          <div className='product' key={item.id}>
            <ArchiveContentTitle pageName={item.name} />
            <ProductBox />
            <FeatureOptions />

            <ul className='row product-content m-0 p-0 py-4 mt-5 mb-4 w-100 bg-main row-gap-4 mx-auto justify-content-between' dir='rtl'>
              <li className='col-lg-3 col-6 d-flex justify-content-center'>
                <Link className='text-color-main text-decoration-none text-st-blog-suggested' to='ReviewProduct'>نقد و بررسی محصول</Link>
              </li>
              <li className='col-lg-3 col-6 d-flex justify-content-center'>
                <Link className='text-color-main text-decoration-none text-st-blog-suggested' to='TechnicalSpecifications'>مشخصات فنی</Link>
              </li>
              <li className='col-lg-3 col-6 d-flex justify-content-center'>
                <Link className='text-color-main text-decoration-none text-st-blog-suggested' to='UserComments'>دیدگاه کاربران</Link>
              </li>
              <li className='col-lg-3 col-6 d-flex justify-content-center'>
                <Link className='text-color-main text-decoration-none text-st-blog-suggested' to='Question'>پرسش و پاسخ</Link>
              </li>
            </ul>

            {location.pathname === '/product/1' ?
              <>
                <ReviewProduct />
              </>
              :
              <>
                <Outlet />
              </>
            }

            <BannerNewProduct />

            <ProductSlide HeadSection='محصولات مرتبط' moreItems={true}>

              <SwiperSlide className=' my-auto d-flex align-items-center'>
                <BoxCards src='../assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </SwiperSlide>

              <SwiperSlide className=' my-auto d-flex align-items-center'>
                <BoxCards src='../assets/img/Products/4-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </SwiperSlide>

              <SwiperSlide className=' my-auto d-flex align-items-center'>
                <BoxCards src='../assets/img/Products/8-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </SwiperSlide>

              <SwiperSlide className=' my-auto d-flex align-items-center'>
                <BoxCards src='../assets/img/Products/2-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </SwiperSlide>

              <SwiperSlide className=' my-auto d-flex align-items-center'>
                <BoxCards src='../assets/img/Products/4-150x150.png' title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' price='55,000,000' />
              </SwiperSlide>

            </ProductSlide>
          </div>
        )
      })}
    </>
  )
}

export default Product