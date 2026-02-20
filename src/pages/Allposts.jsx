import React from 'react'
import { useState ,useEffect} from 'react'
import { Container,Postcard } from '../components'
import appwriteservice from '../appwrite/appwrite'
const Allposts = () => {
    const [post,setpost] = useState([])
    useEffect(()=>{},[])
  appwriteservice.getPosts([]).then((posts)=>{
  if(posts)
    setpost(posts.documents)
  })

  return(
    <div className='w-full py-8' >
        <container>
<div className='flex flex-wrap'>
    {post.map((post)=>{
        <div className='p-2 w-1/4' key={post.$id}>
            <Postcard post={post}/>
        </div>

    })}
</div>

        </container>
    </div>
  )
    

}

export default Allposts