import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextApi } from '../context/ContextApi.jsx';

const Navbar = () => {
  const {totalQuantity} = useContext(ContextApi) || {};
  
  return (
    <nav className='font-pop flex justify-between items-center px-5 sm:px-20 py-5 bg-blue-100 border-b border-blue-600'>
           <Link to={'/'}>
        <div className='flex gap-1 items-center justify-center text-2xl sm:text-3xl text-blue-600 font-semibold'>
           <svg className='fill-blue-600' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M211-120q-22.33 0-40.33-13.5t-24-35.5L39.33-557.67q-4.33-15.66 5.39-29Q54.43-600 71.33-600h198l182-267.33q5-6.67 12-10.67t15.67-4q8.67 0 15.67 4t12 10.67L688-600h201.33q16.9 0 26.62 13.33 9.72 13.34 5.38 29L813.33-169q-6 22-24 35.5T749-120H211Zm-.33-66.67h538.66L846-533.33H114.67l96 346.66Zm269.45-106.66q27.55 0 47.05-19.62 19.5-19.62 19.5-47.17t-19.62-47.05q-19.62-19.5-47.17-19.5t-47.05 19.62q-19.5 19.62-19.5 47.17t19.62 47.05q19.62 19.5 47.17 19.5ZM350.33-600h257L479-789.33 350.33-600Zm130.34 240Z"/></svg>
            <p>
              Vibe Commerce
            </p>
        </div>
          </Link>
        <div className='flex relative items-center justify-center'>            
           <Link to={'/cart'}>
             <svg className=' cursor-pointer fill-blue-400 mt-1 hover:fill-blue-800' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M284.53-80.67q-30.86 0-52.7-21.97Q210-124.62 210-155.47q0-30.86 21.98-52.7Q253.95-230 284.81-230t52.69 21.98q21.83 21.97 21.83 52.83t-21.97 52.69q-21.98 21.83-52.83 21.83Zm400 0q-30.86 0-52.7-21.97Q610-124.62 610-155.47q0-30.86 21.98-52.7Q653.95-230 684.81-230t52.69 21.98q21.83 21.97 21.83 52.83t-21.97 52.69q-21.98 21.83-52.83 21.83ZM238.67-734 344-515.33h285.33l120-218.67H238.67ZM206-800.67h589.38q22.98 0 34.97 20.84 11.98 20.83.32 41.83L693.33-490.67q-11 19.34-28.87 30.67-17.87 11.33-39.13 11.33H324l-52 96h487.33V-286H278q-43 0-63-31.83-20-31.84-.33-68.17l60.66-111.33-149.33-316H47.33V-880h121.34L206-800.67Zm138 285.34h285.33H344Z"/></svg>
              <div className='absolute top-0 right-0 w-5 h-5 rounded-full bg-blue-900 text-white text-xs items-center justify-center flex'>{totalQuantity}</div>
           </Link>
        </div>
    </nav>
  )
}

export default Navbar
