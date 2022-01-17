import React from 'react'

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap})  => {
    return (
        <div className='box-border flex justify-center'>
            <div className='flex flex-row justify-start content-center h-20 border-b-2 w-900'>
                <div className='flex content-center pr-24 min-w-300'>
                    <img className='h-10 w-10 mr-10' src={image} alt='crypto'/>
                    <h1 className='text-xl w-150'>{name}</h1>
                    <p className='uppercase'>{symbol}</p>
                </div>  

                <div className='flex align-right justify-between w-full'>
                    <p className='w-110'>${price}</p>
                    <p className='w-115'>${volume.toLocaleString()}</p>   

                    {priceChange < 0 ? (
                        <p className='text-red-600'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='text-green-600'>{priceChange.toFixed(2)}%</p>
                    )}

                    <p className='w-230'>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p> 
                </div>  
            </div> 
        </div>
    )
}

export default Coin
