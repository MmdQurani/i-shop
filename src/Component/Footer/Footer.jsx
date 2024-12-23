import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='w-100 h-100 footer-shadow'>
      <div className='p-0 d-flex flex-column h-100 container mt-5 py-5' style={{height:'max-content'}}>
        <div className="row" dir='rtl'>

          <div className="col-xl-5 col-12">
            <div className="row">
              <div className="col-xl-3 col-6">
                <div className='w-100 h-100'>
                  <div>
                    <span className='fs-5 sub-text-color-main'>title</span>
                  </div>
                  <div className='d-flex flex-column row-gap-4 mt-5'>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-6">
                <div className='w-100 h-100'>
                  <div>
                    <span className='fs-5 sub-text-color-main'>title</span>
                  </div>
                  <div className='d-flex flex-column row-gap-4 mt-5'>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-6">
                <div className='w-100 h-100'>
                  <div>
                    <span className='fs-5 sub-text-color-main'>title</span>
                  </div>
                  <div className='d-flex flex-column row-gap-4 mt-5'>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-6">
                <div className='w-100 h-100'>
                  <div>
                    <span className='fs-5 sub-text-color-main'>title</span>
                  </div>
                  <div className='d-flex flex-column row-gap-4 mt-5'>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                    <Link to='/' className='fs-6 text-decoration-none text-color-main'>link</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-6">10</div>
          <div className="col-xl-3 col-6">20</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer