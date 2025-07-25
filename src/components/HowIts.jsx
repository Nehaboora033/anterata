import React, { useState } from 'react'
import Heading from './common/Heading'
import Description from './common/Description'
import { Bank, Exchange, Loan, Money, Months } from '../utils/icon'
import Details from './common/Details'

const HowIts = () => {
    const [value, setValue] = useState(40);
    const currentDate = new Date().toLocaleDateString('en-GB');

    // Map 0–100 to $10 – $5,565,500
    const minAmount = 10;
    const maxAmount = 5565500;
    const mappedAmount = Math.round(minAmount + ((maxAmount - minAmount) * (value / 100)));

    return (
        <div className='min-[1340px]:max-w-[740px] w-full bg-[#151940] rounded-[10px] px-[20px] pt-[18px] mb-5 pb-[33px]'>
            <div className='flex items-center justify-between'>
                <Heading className={'text-white text-xl'}>Timeline </Heading>
                <Description className='text-[#62C9CC] !text-[16px] '>How does it works?</Description>
            </div>
            <div className='mb-[49px]'>
                <div className='flex justify-between mt-5 '>
                    <Description className='text-[#8A8C9F]'> 01/08/2023</Description>
                    <Description className='text-[#8A8C9F]'>{currentDate} </Description>
                </div>

                {/* range input  */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="range-custom"
                    style={{
                        background: `linear-gradient(to right, #61CBD3 ${value}%, #1C2341 ${value}%)`
                    }}
                />
                <div className='flex justify-between'>
                    <div>
                        <Description className='!text-[14px]'>$10.00</Description>
                        <Description className='text-[#8A8C9F] mt-2'>Initial public offering</Description>
                    </div>
                    <div>
                        <Description className='!text-[14px] text-end'>
                            ${mappedAmount.toLocaleString()}
                        </Description>
                        <Description className='text-[#8A8C9F] mt-2'>Credit performance (DDC)</Description>
                    </div>
                </div>
            </div>

            {/* cards */}
            <div className='flex flex-wrap gap-2 lg:gap-[12px] max-[534px]:justify-center'>
                <Details titleText={'Working Capital Loan'} infoText={'Type of instrument'} svg={Loan} />
                <Details titleText={'Pantera Exchange'} infoText={'Transmitter'} svg={Exchange} />
                <Details titleText={'Compass Bank'} infoText={'Settlor entity'} svg={Bank} />
                <Details titleText={'$ 5565099.00'} infoText={'Total amount'} svg={Money} />
                <Details titleText={'2 months'} infoText={'Estimated repayment date'} svg={Months} />
            </div>
        </div>
    )
}

export default HowIts