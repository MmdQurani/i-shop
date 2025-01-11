import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaInstagram, FaWhatsapp, FaTelegram, FaFacebook, FaTwitter, FaPhoneAlt, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='w-100 h-100 footer-shadow bg-main'>
      <div className='p-0 d-flex flex-column h-100 container mt-5 py-5 justify-content-center align-items-center' style={{ height: 'max-content' }}>

        <div className="Accesses row row-gap-5 w-100 justify-content-center" dir='rtl'>

          <div className="Quick-access col-xl-6 col-12 d-flex justify-content-center">
            <div className="row row-gap-5 w-100">
              <SiteFooterMenu title='دسترسی های سریع' col='col-xl-4 col-xxl-3'>
                <ItemSiteFooter item='صفحه اصلی' />
                <ItemSiteFooter item='صفحه اصلی' />
                <ItemSiteFooter item='صفحه اصلی' />
                <ItemSiteFooter item='صفحه اصلی' />
                <ItemSiteFooter item='صفحه اصلی' />
                <ItemSiteFooter item='صفحه اصلی' />
              </SiteFooterMenu>
              <SiteFooterMenu title='برندهای مطرح'>
                <ItemSiteFooter item='شیائومی' />
                <ItemSiteFooter item='شیائومی' />
                <ItemSiteFooter item='شیائومی' />
                <ItemSiteFooter item='شیائومی' />
                <ItemSiteFooter item='شیائومی' />
                <ItemSiteFooter item='شیائومی' />
              </SiteFooterMenu>
              <SiteFooterMenu title='راهنمای مشتریان'>
                <ItemSiteFooter item='سبد خرید' />
                <ItemSiteFooter item='سبد خرید' />
                <ItemSiteFooter item='سبد خرید' />
                <ItemSiteFooter item='سبد خرید' />
                <ItemSiteFooter item='سبد خرید' />
                <ItemSiteFooter item='سبد خرید' />
              </SiteFooterMenu>
              <SiteFooterMenu title='دسته بندی ها' col='col-xl-2 col-xxl-3'>
                <ItemSiteFooter item='موبایل' />
                <ItemSiteFooter item=' موبایل موبایل' />
                <ItemSiteFooter item='موبایل' />
                <ItemSiteFooter item='موبایل' />
                <ItemSiteFooter item='موبایل' />
                <ItemSiteFooter item='موبایل' />
              </SiteFooterMenu>
            </div>
          </div>

          <div className="Suggested-products col-xl-3 col-sm-6 d-flex justify-content-center">
            <div className='h-100 w-100 d-flex flex-column'>
              <TitleSiteFooter title='پرفروش ترین محصولات' />
              <div className='d-flex w-100 h-100 justify-content-between align-items-start flex-column mt-4 row-gap-footer-site-item'>
                <SiteFooterProducts price='51,000,000' title='لپ تاپ سرفیس مایکروسافت' />
                <SiteFooterProducts price='51,000,000' title='لپ تاپ سرفیس مایکروسافت' />
                <SiteFooterProducts price='51,000,000' title='لپ تاپ سرفیس مایکروسافت' />
                <SiteFooterProducts price='51,000,000' title='لپ تاپ سرفیس مایکروسافت' />
                <SiteFooterProducts price='51,000,000' title='لپ تاپ سرفیس مایکروسافت' />
                <SiteFooterProducts price='51,000,000' title='لپ تاپ سرفیس مایکروسافت' />
              </div>
            </div>
          </div>

          <div className="Symbol-trust col-xl-3 col-sm-6 d-flex justify-content-center">
            <div className='h-100 w-100 d-flex flex-column'>
              <TitleSiteFooter title='چگونه به مــــــا اعتماد کنیم' />

              <div className='d-flex w-100 h-100 justify-content-start align-items-center flex-column mt-4 row-gap-footer-site-item '>
                <div className="row w-100 h-100 row-gap-3">

                  <div className="col-12 d-flex justify-content-center p-0">
                    <div className="row w-100 h-100 justify-content-around">
                      <NamadWeb src='3-1.png' />
                      <NamadWeb src='4-2.png' />
                      <NamadWeb src='logo.png' />
                    </div>
                  </div>

                  <div className="col-12 w-100 d-flex p-0 d-flex flex-column">
                    <TitleSiteFooter title='ما در شبکه های اجتماعی' />

                    <div className='d-flex w-100 h-100 flex-row mt-4 justify-content-around'>
                      <SocialMedia to='/'>
                        <FaInstagram fontSize={24} className='socials-footer' />
                      </SocialMedia>

                      <SocialMedia to='/'>
                        <FaWhatsapp fontSize={24} className='socials-footer' />
                      </SocialMedia>

                      <SocialMedia to='/'>
                        <FaTwitter fontSize={24} className='socials-footer' />
                      </SocialMedia>

                      <SocialMedia to='/'>
                        <FaTelegram fontSize={24} className='socials-footer' />
                      </SocialMedia>

                      <SocialMedia to='/'>
                        <FaFacebook fontSize={24} className='socials-footer' />
                      </SocialMedia>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="call-info-footer position-relative row row-gap-4 pt-4 w-100 mt-5" dir='rtl'>

          <div className="call-info-box-footer d-flex align-items-center justify-content-center col-xxl-5 col-sm-12 pt-4">

            <div className='d-flex w-100 flex-column row-gap-3 fs-6 text-color-main'>

              <div className='d-flex flex-row justify-content-between'>
                <span style={{ fontSize: '16px', width: 'max-content' }} className='ps-4'> مرکز تماس مشتریان</span>
                <span style={{ fontSize: '19px' }} className='d-flex flex-nowrap align-items-center justify-content-center'>
                  <span>02123456789</span>
                  <FaPhoneAlt className='fs-5 me-2' />
                </span>
              </div>

              <CallInfoItemFooter value='info@sitename.com' title='به صورت شبانه روزی پشتیبان شما هستیم'>
                <FaEnvelope className='fs-5 me-2' />
              </CallInfoItemFooter>

              <CallInfoItemFooter value='تهران ، چیتگر ، میدان ساحل ، خیابان نیما یوشیج' title='رضایت مشتری برای ما در اولویت است'>
                <FaLocationDot className='fs-5 me-2' />
              </CallInfoItemFooter>

            </div>

          </div>

          <div className="SiteFooterServices-box col-xxl-7 col-sm-12 pt-4 d-flex justify-content-center">
            <div className='row w-100 h-100 text-color-main px-3 py-3 rounded-2 row-gap-4 justify-content-between footer-shadow'>

              <SiteFooterServices src='./assets/img/FooterImg/8.png' title='پنل پیشرفته' />
              <SiteFooterServices src='./assets/img/FooterImg/7-1.png' title='پشتیبانی' />
              <SiteFooterServices src='./assets/img/FooterImg/6-3.png' title='ثبت لوکیشن' />
              <SiteFooterServices src='./assets/img/FooterImg/4-3.png' title='اطلاعات' />
              <SiteFooterServices src='./assets/img/FooterImg/5-3.png' title='خبرنامه' />
              <SiteFooterServices src='./assets/img/FooterImg/3-3.png' title='امنیت' />
              <SiteFooterServices src='./assets/img/FooterImg/2-4.png' title='سبد خرید' />
              <SiteFooterServices src='./assets/img/FooterImg/1-4.png' title='پرداخت' />

            </div>
          </div>

        </div>

        <div className="SiteFooterAbout row call-info-footer mt-5 position-relative w-100 h-100 pt-5 row-gap-5" dir='rtl'>
          <div className="Logo-box-site-footer col-md-4 col-xxl-2 col-12">
            <Link to='/' className='w-100 h-100 d-flex justify-content-center align-items-center'>
              <img src={`./assets/img/Logo/logo1.jpg`} width={220} alt="" />
            </Link>
          </div>

          <div className="col-md-8 col-xxl-10 col-12">
            <span className='price-product-site-footer text-color-main'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات طراحی اساسا مورد استفاده قرار گیرد.
            </span>
          </div>
        </div>

        <div className="SiteFooterCopyRight row call-info-footer row-gap-3 mt-5 position-relative w-100 h-100 pt-5 justify-content-between" dir='rtl'>

          <div className="col-md-5 col-12">
            <div className="ScrollToFirst w-100 h-100 d-flex row-gap-3 column-gap-3 justify-content-center align-items-center">
              <button className='btn bg-btn' onClick={() => { ScrollToFirstBtn() }}>
                <FaArrowUp />
              </button>
              <span className='price-product-site-footer sub-text-color-main'>تمامی حقوق برای این فروشگاه محفوظ است</span>
            </div>
          </div>

          <div className="col-md-5 col-12">
            <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
              <Link to='/' className='price-product-site-footer text-color-main text-decoration-none'>طراحی و توسعه داده شده توسط‌ ‌ ‌[ mmd-web ]</Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}

function ScrollToFirstBtn() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // این ویژگی باعث می‌شود اسکرول به آرامی انجام شود  
  });
}

export function SiteFooterMenu(prop) {
  return (
    <div className={`${prop.col ? prop.col : 'col-xl-3'} col-sm-6 col-12 p-0`}>
      <div className='w-100 h-100'>
        <TitleSiteFooter title={prop.title} />
        <div className='d-flex flex-column row-gap-footer-site-item mt-4'>
          {prop.children}
        </div>
      </div>
    </div>
  )
}

export function SiteFooterProducts(prop) {
  return (
    <>
      <div className='row d-flex justify-content-between w-100'>
        <div className="col-6 d-flex justify-content-center">
          <Link to='/' className='title-product-site-footer text-decoration-none text-color-main text-st-blog-suggested w-100 ItemSiteFooter price-product-site-footer'>{prop.title}</Link>
        </div>
        <div className="col-4 p-0 d-flex justify-content-center">
          <span className='price-product-site-footer text-st-blog-suggested text-color-main w-100 d-flex justify-content-end'>{prop.price} تومان</span>
        </div>
      </div>
    </>
  )
}

export function TitleSiteFooter(prop) {
  return (
    <>
      <div className='position-relative pb-3'>
        <span className='TitleSiteFooter sub-text-color-main w-100 d-flex w-100 fs-6'>{prop.title}</span>
      </div>
    </>
  )
}

export function ItemSiteFooter(prop) {
  return (
    <>
      <div className='d-flex w-75'>
        <Link to='/' className='text-decoration-none text-st-blog-suggested text-color-main ItemSiteFooter fs-ItemSiteFooter'>{prop.item}</Link>
      </div>
    </>
  )
}

export function NamadWeb(prop) {
  return (
    <>
      <div className="col-sm-4 col-md-3 col-xl-4 col-3 col-namd-img p-lg-namad-img h-100">
        <Link to='/' className='w-100 h-100 d-flex justify-content-center align-items-center'>
          <img src={`./assets/img/Namad/${prop.src}`} className='w-100' alt="" />
        </Link>
      </div>
    </>
  )
}

export function SocialMedia(prop) {
  return (
    <>
      <Link to={`${prop.to}`}>
        {prop.children}
      </Link>
    </>
  )
}

export function SiteFooterServices(prop) {
  return (
    <>
      <Link to='/' className="col-lg-1 p-0 col-6 text-decoration-none text-color-main">
        <div className='w-100 h-100 d-flex flex-column row-gap-2 align-items-center justify-content-center'>
          <img src={prop.src} style={{ width: '57px' }} alt="" />
          <span style={{ fontSize: '12px' }}>{prop.title}</span>
        </div>
      </Link>
    </>
  )
}

export function CallInfoItemFooter(prop) {
  return (
    <>
      <div className='d-flex flex-row justify-content-between'>
        <span style={{ width: 'max-content' }} className='fs-call-info-item-footer ps-4'>{prop.title}</span>
        <span className='fs-call-info-item-footer d-flex flex-nowrap align-items-center justify-content-center'>
          <span>{prop.value}</span>
          {prop.children}
        </span>
      </div>
    </>
  )
}

export default Footer