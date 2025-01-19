import React, { useState, useEffect } from 'react'
import './Blogs.css'
import ArchiveContentTitle from '../../Component/ArchiveContentTitle/ArchiveContentTitle'
import BannerSlider from '../../Component/BannerSlider/BannerSlider'
import HeadSection from '../../Component/HeadSection/HeadSection';
import { LuUser } from 'react-icons/lu';
import { MdOutlineDateRange } from 'react-icons/md';
import { FiMessageSquare } from 'react-icons/fi';
import { FaRegClock } from 'react-icons/fa';

function Blogs() {

  const [blogBanner, setBlogBanner] = useState([]);

  const resizeHandler = () => {
    if (window.innerWidth < 992) {
      setBlogBanner(
        [
          { id: 1, src: 'assets/img/BlogImg/mobo.png' },
          { id: 2, src: 'assets/img/BlogImg/mobo2.png' }
        ]
      );
    } else {
      setBlogBanner(
        [
          { id: 1, src: 'assets/img/BlogImg/s2.png' },
          { id: 2, src: 'assets/img/BlogImg/s3.png' },
          { id: 3, src: 'assets/img/BlogImg/s1.png' },
        ]
      );
    }
  }

  useEffect(() => {

    resizeHandler()

    window.addEventListener('resize', resizeHandler);
  }, [])

  return (
    <>
      <div className='Blogs-Content'>
        <ArchiveContentTitle pageName='مقاله ها' countItem='15 مقاله' />

        <div className="Blogs-Banners w-100 h-100">
          <BannerSlider items={blogBanner} />
        </div>

        <div className='latest-blog mt-5 d-flex flex-column justify-content-start'>
          <HeadSection moreItems={true} link='/' title={`جدیدترین`} />

          <div className="row w-100 h-100 justify-content-center mx-auto row-gap-4 mt-2" dir='rtl'>
            <div className="col-xl-6 col-md-6 col-12">
              <BlogBannerLatest />
            </div>

            <div className="col-xl-3 col-md-6 col-12">
              <BlogCard />
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <BlogCard />
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <BlogCard />
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <BlogCard />
            </div>

            <div className="col-xl-6 col-md-6 col-12">
              <BlogBannerLatest />
            </div>
          </div>

        </div>

        <div className="Most-visited-blog mt-5 d-flex flex-column justify-content-start">
          <HeadSection moreItems={false} link='/' title={`پربازدید ترین`} />

          <div className="row mt-2 row-gap-4" dir='rtl'>
            <div className="col-xl-6 col-12">
              <BlogCardHorizontal />

            </div>

            <div className="col-xl-6 col-12">
              <BlogCardHorizontal />

            </div>

          </div>

        </div>

        <div className="trend-blog mt-5 w-100 h-100 d-flex flex-column justify-content-start">
          <HeadSection moreItems={false} link='/' title={`پربحث ترین`} />

          <div className="row row-gap-4 mt-2" dir='rtl'>
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-12">
              <BlogCard />
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-12">
              <BlogCard />
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-12">
              <BlogCard />
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-12">
              <BlogCard />
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-12">
              <BlogCard />
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-12">
              <BlogCard />
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-12">
              <BlogCard />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export function BlogBannerLatest() {
  return (
    <>
      <div className='banner-blog-main position-relative w-100 h-100'>
        <img src="./assets/img/BlogImg/mag3.jpg" className='img-banner-main-blog' alt="" />
        <div style={{ zIndex: 100 }} className='position-absolute w-100 h-100 top-0 d-flex flex-column justify-content-end row-gap-3 px-2 pb-3'>
          <span className='text-light fs-5 pe-3 title-banner-main-blog' >دلایلی برای خرید گوشی ناتینگ فون یک</span>
          <div className='d-flex flex-row justify-content-center w-100 text-light column-gap-3 fs-xs-banner-blog'>

            <div className="blog-banner-latest row w-100 row-gap-2">

              <div className='col-xxl-3 col-6'>
                <span>
                  <LuUser className='ms-1' />
                  مدیر سایت
                </span>
              </div>
              <div className='col-xxl-3 col-6'>
                <div dir='rtl' className='d-flex flex-row column-gap-1 align-items-center'>
                  <MdOutlineDateRange fontSize={'16px'} />
                  <span>06</span>
                  <span>مهر</span>
                  <span>1403</span>
                </div>
              </div>
              <div className='col-xxl-2 col-6'>
                <span>
                  <FiMessageSquare className='ms-1' />
                  1
                </span>
              </div>
              <div className='col-xxl-3 col-6'>
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
    </>
  )
}

export function BlogCard() {
  return (
    <>
      <div className='blog-card w-100 h-100'>
        <div class="card w-100 h-100">
          <img src="./assets/img/BlogImg/pci1.png" class="card-img-top" alt="" />
          <div class="card-body py-4 px-3 row-gap-3 d-flex flex-column justify-content-center align-items-start">
            <h5 class="card-title fs-6 text-color-main fs-6 text-color-main">دلایلی برای خرید گوشی ناتینگ فون یک</h5>
            <p className="card-text lh-lg sub-text-color-main " style={{ fontSize: '14px' }}>
              دلایل خرید گوشی ۱ Nothing Phone بسیار قانع‌کننده‌ هستند، با توجه به نوع طراحی پیشرو، سخت‌افزار قدرتمند و قیمت مناسب، گوشی ناتینگ دلایل کافی برای خرید را در اختیار کاربر قرار می‌دهد.
            </p>
            <div className="d-flex w-100 h-100 flex-row justify-content-between align-items-center px-2 text-color-main" style={{ fontSize: '13px' }}>
              <div className='d-flex flex-row column-gap-1 align-items-center'>
                <FaRegClock />
                <span className='me-1'>15</span>
                <span>دقیقه</span>
              </div>
              <span>
                <FiMessageSquare className='ms-1' />
                1
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function BlogCardHorizontal() {
  return (
    <>
      <div class="card p-0 w-100 h-100">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="./assets/img/BlogImg/mag3.jpg" className='w-100 h-100 rounded-2' style={{ objectFit: 'cover' }} />
          </div>
          <div class="col-md-8">
            <div class="card-body row-gap-2 py-4 px-4 d-flex flex-column align-items-start">
              <h5 class="card-title fs-6 text-color-main">دلایلی برای خرید گوشی ناتینگ فون یک</h5>
              <p class="card-text lh-lg sub-text-color-main" style={{ fontSize: '13px' }}>دلایل خرید گوشی ۱ Nothing Phone بسیار قانع‌کننده‌ هستند، با توجه به نوع طراحی پیشرو، سخت‌افزار قدرتمند و قیمت مناسب، گوشی ناتینگ دلایل کافی برای خرید را در اختیار کاربر قرار می‌دهد.</p>
              <div className="d-flex w-100 h-100 flex-row justify-content-between align-items-center px-2 text-color-main" style={{ fontSize: '13px' }}>
                <div className='d-flex flex-row column-gap-1 align-items-center'>
                  <FaRegClock />
                  <span className='me-1'>15</span>
                  <span>دقیقه</span>
                </div>
                <span>
                  <FiMessageSquare className='ms-1' />
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs