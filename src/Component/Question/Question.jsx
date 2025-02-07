import React from 'react'
import { Accordion } from 'react-bootstrap'
import { AccordionItemFaqs } from '../../Pages/Faqs/Faqs'

function Question() {
  return (

    <Accordion defaultActiveKey="1" dir='rtl' className='d-flex flex-column row-gap-4 py-4'>

      <AccordionItemFaqs eventKey='1' title='به نظرتون هنوز بعد ۳ سال با در نظر گرفتن همه جوانب این گوشی ارزش خرید داره ؟' subTitle='احتمالاتی در مورد ریجستری سری ۱۴ و ... وجود داره اما اگر عجله داری بله گزینه خوبی هست' />

      <AccordionItemFaqs eventKey='2' title='اگه از آی شاپ کالا بخریم کی برامون اپل آیدی میسازه؟ خودمون می تونیم بسازیم؟' subTitle='بیرون کلی پول میگیرن میسازن اما اونم معلوم نیست کی غیرفعال بشه. هوش مصنوعی اپل متوجه میشه و مسدود' />

      <AccordionItemFaqs eventKey='3' title='به نظرتون هنوز بعد ۳ سال با در نظر گرفتن همه جوانب این گوشی ارزش خرید داره ؟' subTitle='احتمالاتی در مورد ریجستری سری ۱۴ و ... وجود داره اما اگر عجله داری بله گزینه خوبی هست' />

      <AccordionItemFaqs eventKey='4' title='اگه از آی شاپ کالا بخریم کی برامون اپل آیدی میسازه؟ خودمون می تونیم بسازیم؟' subTitle='بیرون کلی پول میگیرن میسازن اما اونم معلوم نیست کی غیرفعال بشه. هوش مصنوعی اپل متوجه میشه و مسدود' />

      <AccordionItemFaqs eventKey='5' title='به نظرتون هنوز بعد ۳ سال با در نظر گرفتن همه جوانب این گوشی ارزش خرید داره ؟' subTitle='احتمالاتی در مورد ریجستری سری ۱۴ و ... وجود داره اما اگر عجله داری بله گزینه خوبی هست' />

      <AccordionItemFaqs eventKey='6' title='اگه از آی شاپ کالا بخریم کی برامون اپل آیدی میسازه؟ خودمون می تونیم بسازیم؟' subTitle='بیرون کلی پول میگیرن میسازن اما اونم معلوم نیست کی غیرفعال بشه. هوش مصنوعی اپل متوجه میشه و مسدود' />

    </Accordion>
  )
}

export default Question