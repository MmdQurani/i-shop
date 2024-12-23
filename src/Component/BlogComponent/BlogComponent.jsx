import React from 'react'
import './BlogComponent.css'
import HeadSection from '../HeadSection/HeadSection'
import { LuUser } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";

function BlogComponent() {
  return (
    <>
      <HeadSection title='وبلاگ' moreItems={true} />
      <div className='BlogComponent position-relative mt-4 py-2 d-flex justify-content-center' style={{ height: 'max-content' }}>

        <div className="row w-100 h-100 row-gap-3" dir='rtl'>

          <div className="col-xl-7 col-12 h-100">
            <BannerBlogMain />
          </div>

          <div className="col-xl-5 col-12">
            <>
              <div className="h-blog-item row h-100 row-gap-3">
                <SuggestedBlog src='./assets/img/BlogImg/pci1.png' title='اندروید باکس نت باکس موبوادیشن ، تلویزیون هوشمند ارزان' subTitle='در دنیای پیشرفته فناوری امروز، لپ تاپ‌ها نقشی اساسی در زندگی روزمره و حرفه‌ای ما ایفا کرده و انتخاب یک لپ تاپ مناسب تأثیر قابل توجهی بر بهره‌وری، خلاقیت و حتی سرگرمی کاربران دارد.' flagBorder={true} />
                <SuggestedBlog src='./assets/img/BlogImg/mag.jpg' title='دلایلی برای خرید گوشی ناتینگ فون یک' subTitle='دلایل خرید گوشی ۱ Nothing Phone بسیار قانع‌کننده‌ هستند، با توجه به نوع طراحی پیشرو، سخت‌افزار قدرتمند و قیمت مناسب، گوشی ناتینگ دلایل کافی برای خرید را در اختیار کاربر قرار' flagBorder={true} />
                <SuggestedBlog src='./assets/img/BlogImg/mag3.jpg' title='نقد و بررسی اندروید باکس نت باکس موبوادیشن' subTitle='در دنیای پیشرفته فناوری امروز، لپ تاپ‌ها نقشی اساسی در زندگی روزمره و حرفه‌ای ما ایفا کرده و انتخاب یک لپ تاپ مناسب تأثیر قابل توجهی بر بهره‌وری، خلاقیت و حتی سرگرمی کاربران دارد.' flagBorder={false} />
              </div>
            </>
          </div>

        </div>

      </div>
    </>
  )
}

export function BannerBlogMain() {
  return (
    <div className='banner-blog-main position-relative w-100 h-100'>
      <img src="./assets/img/BlogImg/pci1.png" className='img-banner-main-blog' alt="" />
      <div style={{ zIndex: 100 }} className='position-absolute w-100 h-100 top-0 d-flex flex-column justify-content-end row-gap-3 px-2 pb-3'>
        <span className='text-light fs-5 pe-3 title-banner-main-blog' >دلایلی برای خرید گوشی ناتینگ فون یک</span>
        <div className='d-flex flex-row justify-content-center w-100 text-light column-gap-3 fs-xs-banner-blog'>
          <div className="row w-100 row-gap-1">

            <div className="col-sm-3 col-lg-3 ps-0 col-6">
              <span>
                <LuUser className='ms-1' />
                مدیر سایت
              </span>
            </div>
            <div className="col-sm-4 col-md-3 col-lg-3 col-6">
              <div dir='rtl' className='d-flex flex-row column-gap-1 align-items-center'>
                <MdOutlineDateRange fontSize={'16px'} />
                <span>06</span>
                <span>مهر</span>
                <span>1403</span>
              </div>
            </div>
            <div className="col-sm-2 col-lg-2 col-6">
              <span>
                <FiMessageSquare className='ms-1' />
                1
              </span>
            </div>
            <div className="col-sm-3 col-lg-3 col-6">
              <div className='d-flex flex-row column-gap-1 align-items-center'>
                <FaRegClock />
                <span>15</span>
                <span>دقیقه</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export function SuggestedBlog(prop) {
  return (
    <div className="col-12 p-0">
      <div className={`${!prop.flagBorder ? '' : 'SuggestedBlog'} position-relative w-100 h-100 d-flex justify-content-center align-items-center`}>

        <div className="row w-100 h-100">
          <div className="col-4 px-0">
            <Link to='/'>
              <div className='w-100 h-100 position-relative banner-blog-main'>
                <img src={prop.src} className='img-banner-main-blog' alt="" />
              </div>
            </Link>
          </div>

          <div className="col-8 ps-0">
            <div className='w-100 h-100 d-flex flex-column justify-content-around'>
              <Link to='/' className='text-color-main text-st-blog-suggested text-decoration-none fs-6' >{prop.title}</Link>
              <span className='mt-subtext-suggested-blog  sub-text-color-main text-st-blog-suggested fs-suggested-blog-text' dir='rtl'>{prop.subTitle}</span>

              <div className='w-100 d-flex flex-row justify-content-between pt-2 sub-text-color-main'>

                <div className='w-item-suggested-blog fs-suggested-blog-text d-flex flex-sm-row flex-column ps-1 justify-content-between align-items-start flex-wrap row-gap-2'>
                  <span>
                    <LuUser className='ms-1' />
                    مدیر سایت
                  </span>
                  <div dir='rtl' className='d-flex flex-row column-gap-1 align-items-center'>
                    <MdOutlineDateRange fontSize={'16px'} />
                    <span>06</span>
                    <span>مهر</span>
                    <span>1403</span>
                  </div>
                  <span>
                    <FiMessageSquare className='ms-1' />
                    1
                  </span>
                </div>

                <div className='text-decoration-none fs-suggested-blog-text text-start d-flex justify-content-center align-items-center'>
                  <Link to='/' className='w-100 text-decoration-none sub-text-color-main'>
                    مدیر سایت
                    <FaAngleLeft className='me-1' />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BlogComponent