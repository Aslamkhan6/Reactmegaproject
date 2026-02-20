import  React ,{ useEffect,useState } from "react"
// import React {useEffect,} from 'react'
import appwriteservice from '../appwrite/conf'
import { Container } from "../components"

const Home = () => {
    const [post,setpost] = useState([])
    useEffect((()=>{
        appwriteservice.getPosts().then((posts)=>{
            if(posts){
                setpost(posts.documents)
            }
        },[])
    }))
    if(post.length===0){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex  flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts

                            </h1>


                        </div>

                    </div>
                </Container>

            </div>
        )
}

return(

    <div className="w-full py-8 mt-4">
        <Container>
            <div className="flex  flex-wrap">
                {post.map((post)=>{
                    
                        <div className="p-2 w-1/4" key={post.$id}>
                            <PostCard {...post}/>
                        </div>
                    
                })}
                </div>
                </Container>
                </div>
)
}
export default Home