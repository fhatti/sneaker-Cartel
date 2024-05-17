import React from 'react'
import { Button } from '../components'

const Subscribe = () => {
  return (
    <section
    className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[70px] lg:max-w-md font-palanquin font-bold text-subHeadline'>Get the Buzz – <span className='text-headline'>Subscribe Today!</span></h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-2 sm:border-subHeadline rounded-full'>
        <input type='text' placeholder='subscribe@snkr-cartel.com' className='input bg-inherit' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth bgColor={"bg-subHeadline"} textColor={"text-headline"}  hoverTextColor={"text-button"} />
        </div>
        </div>
    </section>
  )
}

export default Subscribe