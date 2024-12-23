import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='w-100 h-100 footer-shadow'>
      <div className='p-0 d-flex flex-column h-100 container mt-5 py-5' style={{ height: 'max-content' }}>
        <div className="row row-gap-5 w-100 justify-content-center" dir='rtl'>

          <div className="col-xl-5 col-12 pe-0 d-flex justify-content-center">
            <div className="row row-gap-5 w-100">
              <SiteFooter title='دسترسی های سریع' col='col-xl-4'>
                <ItemSiteFooter item='صفحه اصلی' />
                <ItemSiteFooter item='صفحه اصلی' />
                <ItemSiteFooter item='صفحه اصلی' />
                <ItemSiteFooter item='صفحه اصلی' />
                <ItemSiteFooter item='صفحه اصلی' />
                <ItemSiteFooter item='صفحه اصلی' />
              </SiteFooter>
              <SiteFooter title='برندهای مطرح'>
                <ItemSiteFooter item='شیائومی' />
                <ItemSiteFooter item='شیائومی' />
                <ItemSiteFooter item='شیائومی' />
                <ItemSiteFooter item='شیائومی' />
                <ItemSiteFooter item='شیائومی' />
                <ItemSiteFooter item='شیائومی' />
              </SiteFooter>
              <SiteFooter title='راهنمای مشتریان'>
                <ItemSiteFooter item='سبد خرید' />
                <ItemSiteFooter item='سبد خرید' />
                <ItemSiteFooter item='سبد خرید' />
                <ItemSiteFooter item='سبد خرید' />
                <ItemSiteFooter item='سبد خرید' />
                <ItemSiteFooter item='سبد خرید' />
              </SiteFooter>
              <SiteFooter title='دسته بندی ها' col='col-xl-2'>
                <ItemSiteFooter item='موبایل' />
                <ItemSiteFooter item='موبایل' />
                <ItemSiteFooter item='موبایل' />
                <ItemSiteFooter item='موبایل' />
                <ItemSiteFooter item='موبایل' />
                <ItemSiteFooter item='موبایل' />
              </SiteFooter>
            </div>
          </div>

          <div className="col-xl-4 col-sm-6">
            <TitleSiteFooter title='پرفروش ترین محصولات' />
          </div>
          <div className="col-xl-3 col-sm-6">
            <TitleSiteFooter title='چگونه به مــــــا اعتماد کنیم' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export function SiteFooter(prop) {
  return (
    <div className={`${prop.col ? prop.col : 'col-xl-3'} col-sm-6 col-12 p-0`}>
      <div className='w-100 h-100'>
        <TitleSiteFooter title={prop.title} />
        <div className='d-flex flex-column row-gap-4 mt-4'>
          {prop.children}
        </div>
      </div>
    </div>
  )
}

export function TitleSiteFooter(prop) {
  return (
    <>
      <div className='position-relative pb-3'>
        <span className='TitleSiteFooter sub-text-color-main w-100 d-flex w-100' style={{ fontSize: '14px' }}>{prop.title}</span>
      </div>
    </>
  )
}

export function ItemSiteFooter(prop) {
  return (
    <Link to='/' className='text-decoration-none text-color-main ItemSiteFooter' style={{ width: 'max-content', fontSize: '12px' }}>{prop.item}</Link>
  )
}

export default Footer