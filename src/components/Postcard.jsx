import React from 'react'
import appwriteService from '../appwrite/conf';
import { Link } from 'react-router-dom';
const Postcard = ({$id,title,featuredImage}) => {

  return (
    <Link to ={`/post/${$id}`}>
        <div className='w-full bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='w-full h-48 object-cover'/>
            <div className='p-4'>
                <h3 className='text-lg font-semibold text-gray-800 truncate'>{title}</h3>
            </div>
        </div>
    </Link>
  )
}

export default Postcard