import React, { useEffect, useState } from 'react'
import './Product.css'
import { useLocation, useParams } from 'react-router-dom'
import data from '../../Datas';
import ArchiveContentTitle from '../../Component/ArchiveContentTitle/ArchiveContentTitle';
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
                    <div className='d-flex flex-column'>
                      <ProductTitle title='گوشی موبایل اپل مدل پرومکس دو سیم‌ کارت نات اکتیو سیزده' />

                      <ProductInfoTitle title='توضیحات محصول' />

                      <p className='p-0 m-0 mt-2 lh-32 text-color-main text-line-clamp-6 fs-price-card'>گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در این گوشی وجود دارد. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است که در آیفون جدید اپل به کار گرفته شده است. از نظر سخت‌‌افزاری این گوشی از تراشه­‌ی جدید A15 بهره می‌برد که دارای 15 میلیارد ترانزیستور است که دارای کنترل گرمای مطلوبی بوده که تا بتواند علاوه بر کارهای معمول، از قابلیت‌های جدید واقعیت مجازی که اپل این روزها روی آن تمرکز خاصی دارد، پشتیبانی کند. به گفته خود شرکت اپل این گوشی دارای سرعتی 50 برابر نسخه 12 خود است. پردازنده دارای ماژولار جدیدی است که مصرف باتری را بسیار پایین‌تر آورده است و شما دارای حفظ باتری بالاتری هستید</p>

                      <ProductInfoTitle title='ویژگی محصول' />

                      <div className="row mt-3 row-gap-3">
                        <ProductFeatures featureTitle='رنگ' feature='آبی, قرمز, مشکی' />
                        <ProductFeatures featureTitle='گارانتی' feature='25 روزه' />
                        <ProductFeatures featureTitle='سایز' feature='بزرگ, کوچک' />
                        <ProductFeatures featureTitle='بلندگو' feature='استریو' />
                      </div>

                    </div>
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

export function ProductTitle(prop) {
  return (
    <>
      <span className='fs-4 text-color-main'>{prop.title}</span>
    </>
  )
}

export function ProductInfoTitle(prop) {
  return (
    <>
      <span className='fs-6 sub-text-color-main mt-4'>{prop.title}</span>
    </>
  )
}

export function ProductFeatures(prop) {
  return (
    <>
      <div className="col-xxl-3 col-6">
        <div className='d-flex flex-row align-items-center column-gap-2 w-100'>
          <span className='fs-price-card sub-text-color-main'>{prop.featureTitle}</span>
          <span className='fs-ItemSiteFooter text-color-main text-st-blog-suggested'>{prop.feature}</span>
        </div>
      </div>
    </>
  )
}

export default Product