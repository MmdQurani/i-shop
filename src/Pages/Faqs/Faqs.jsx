import React from 'react'
import './Faqs.css'
import { Accordion } from 'react-bootstrap'

function Faqs() {
  return (
    <>
      <div className='Faqs-content'>
        <Accordion defaultActiveKey="1" dir='rtl' className='d-flex flex-column row-gap-4'>

          <AccordionItemFaqs eventKey='1' title='چطور می‌توانم سفارشم را پیگیری کنم؟' subTitle='جهت سهولت در پیگیری گارانتی دستگاه خود می توانید از طریق شماره 02161930010 اقدام نمائید.' />
          
          <AccordionItemFaqs eventKey='2' title='میتوانم سفارشم را بصورت اقساطی ( اعتباری ) پرداخت کنم؟<' subTitle='امروزه توجه به کیفیت کالا از مهمترین وظایف فروشندگان کالا است و خدمات پس از فروش ضامن حفظ این کیفیت می باشد. در همین راستا شرکت آی شاپ مفتخر به ارائه سرویس در اسرع وقت به مشتریان گرامی می باشد. جهت سهولت در پیگیری گارانتی دستگاه خود می توانید از طریق شماره 02161930010 اقدام نمائید.' />
          
          <AccordionItemFaqs eventKey='3' title='چطور درخواست خود را جهت بازگرداندن کالا (مرجوعی کالا) به شما اطلاع دهم؟<' subTitle='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' />
          
          <AccordionItemFaqs eventKey='4' title='چگونه می توانم نصب و پیگیری درگاه پرداخت هوشمند آی شاپ را انجام دهم؟<' subTitle='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' />
          
          <AccordionItemFaqs eventKey='5' title='هزینه ی ارسال در آی شاپ چگونه محاسبه میشود؟' subTitle='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' />

        </Accordion>
      </div>
    </>
  )
}

export function AccordionItemFaqs(prop) {
  return (
    <>
      <Accordion.Item eventKey={prop.eventKey} className='border-0 bg-main card'>
        <Accordion.Header className='py-2'>
          <span className='fs-6 text-end w-75 lh-lg' style={{ color: '#0650a3' }}>{prop.title}</span>
        </Accordion.Header>
        <Accordion.Body>
          <span className='fs-call-info-item-footer text-color-main'>{prop.subTitle}</span>
        </Accordion.Body>
      </Accordion.Item>
    </>
  )
}

export default Faqs