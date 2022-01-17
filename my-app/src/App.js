import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Coin from './Coin';

function App() {

  const [coins, setCoins]= useState([]);
  const [search, setSearch]=useState('');

  useEffect(() =>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res=>{
      setCoins(res.data);
    }).catch(error => console.log(error))
  },[]);

  const handelChange = e => {
    setSearch(e.target.value)
  }

  const filterCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )
  

  return (
    <div className="App box-border m-0 p-0 bg-gray-900 text-white flex-column align-center justify-center">
      <div className='text-2xl font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate text-center'>
          Search a currency
      </div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input onChange={handelChange} type='text' className='bg-white w-300 h-50 border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm justify-center' placeholder='Search..'/> 
      </div>
      {filterCoins.map(coin => {
        return(
          <Coin key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}/>
        )
      })}
    </div>
  );
}

export default App;
