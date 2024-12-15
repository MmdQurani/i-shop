import React from 'react'
import './ShoppingPackage.css'

function ShoppingPackage() {
  return (
    <div className='mt-4 d-flex justify-content-center align-items-center' style={{height:'max-content'}}>
      <div className="row w-100 h-100" dir='rtl'>
        <div className="col-xl-9 col-12">
          <div className='w-100 h-100 py-1'>
            <img src="./assets/img/PackageImg/1-1.jpg" style={{width:'100%' , height:'100%' , borderRadius:'1rem'}} alt="" />
          </div>
        </div>
        <div className="col-xl-3 col-12 bg-danger">
          
        </div>
      </div>
    </div>
  )
}

export default ShoppingPackage