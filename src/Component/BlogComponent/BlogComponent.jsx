import React from 'react'
import './BlogComponent.css'
import HeadSection from '../HeadSection/HeadSection'
import { LuUser } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { Link } from 'react-router-dom';

function BlogComponent() {
  return (
    <>
      <HeadSection title='وبلاگ' moreItems={true} />
      <div className='BlogComponent mt-4 py-2 d-flex justify-content-center' style={{ height: 'max-content', position: 'relative' }}>

        <div className="row w-100 h-100 row-gap-3" dir='rtl'>

          <div className="col-xl-7 col-12 h-100">
            <BannerBlogMain />
          </div>

          <div className="col-xl-5 col-12">
            <>
              <div className="h-blog-item row  row-gap-3">
                <SuggestedBlog />
                <SuggestedBlog />
                <SuggestedBlog />
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
      <img src="./assets/img/BlogImg/pci1.png" style={{ height: '100%', width: '100%', borderRadius: '1rem' }} alt="" />
      <div style={{ position: 'absolute', zIndex: 100 }} className='w-100 h-100 top-0 d-flex flex-column justify-content-end row-gap-3 px-2 pb-3'>
        <span className='text-light fs-5 pe-3' style={{ textShadow: '0 0 1px #fff , 0 0 1px #fff , 0 0 1px #fff' }} >دلایلی برای خرید گوشی ناتینگ فون یک</span>
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

export function SuggestedBlog() {
  return (
    <div className="col-12 p-0">
      <Link to='/' className='w-100 h-100  d-flex justify-content-center align-items-center text-decoration-none'>

        <div className="row w-100 h-100">
          <div className="col-4 px-0">
            <div className='w-100 h-100 position-relative banner-blog-main'>
              <img src="./assets/img/BlogImg/mag3.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} alt="" />
            </div>
          </div>

          <div className="col-8 ps-0">
            <div className='w-100 h-100 d-flex flex-column justify-content-around'>
              <span className='text-color-main' style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', }}>اندروید باکس نت باکس موبوادیشن ، تلویزیون هوشمند ارزان</span>
              <span className='mt-3 sub-text-color-main' style={{ fontSize: '12px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', }}>در دنیای پیشرفته فناوری امروز، لپ تاپ‌ها نقشی اساسی در زندگی روزمره و حرفه‌ای ما ایفا کرده و انتخاب یک لپ تاپ مناسب تأثیر قابل توجهی بر بهره‌وری،</span>

              <div className='w-100 d-flex flex-row justify-content-between pt-2 sub-text-color-main'>

                <div style={{ fontSize: '12px', width: '65%' }} className='d-flex flex-sm-row flex-column ps-1 justify-content-between align-items-start flex-wrap row-gap-2'>
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
                <Link to='/' style={{ fontSize: '12px' }} className='text-decoration-none text-color-main text-start d-flex justify-content-center align-items-center'>
                  <span className='w-100'>
                    مدیر سایت
                    <LuUser className='me-1' />
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </div>

      </Link>
    </div>
  )
}

export default BlogComponent