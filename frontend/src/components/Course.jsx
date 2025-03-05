import React from 'react'  
import { useState, useEffect } from "react";
import Cards from './Cards'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Course() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    }, []);
    
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='pt-48 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl '>We're delighted to have you <span className='text-pink-400'>HERE! :)</span></h1>
            <p className='mt-11'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta error cupiditate repellat suscipit ducimus? Ex quod quia accusamus, consequatur amet eaque nobis magnam, illum et provident, voluptates illo in numquam accusantium quo sequi quis tempore praesentium? At, quos? Quas ab et dolor pariatur? Vitae voluptatibus dignissimos ut delectus at ipsum.</p>
            <Link to='/'> 
                <button className='bg-pink-500 text-white px-4 py-2 rounded-md mt-8 hover:bg-pink-700 duration-300'>Back</button>
            </Link>
        </div>
        <div className='grid mt-12 grid-cols-1 md:grid-cols-4'>
            {
                book.map((item) => (
                    <Cards key={item.id} item={item} />
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course
