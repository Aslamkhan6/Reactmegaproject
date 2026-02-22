// // import  React ,{ useEffect,useState } from "react"
// // // import React {useEffect,} from 'react'
// // import appwriteservice from '../appwrite/conf'
// // import { Container } from "../components"

// // const Home = () => {
// //     const [post,setpost] = useState([])
// //     useEffect((()=>{
// //         appwriteservice.getPosts().then((posts)=>{
// //             if(posts){
// //                 setpost(posts.documents)
// //             }
// //         },[])
// //     }))
// //     if(post.length===0){
// //         return (
// //             <div className="w-full py-8 mt-4 text-center">
// //                 <Container>
// //                     <div className="flex  flex-wrap">
// //                         <div className="p-2 w-full">
// //                             <h1 className="text-2xl font-bold hover:text-gray-500">
// //                                 Login to read posts

// //                             </h1>


// //                         </div>

// //                     </div>
// //                 </Container>

// //             </div>
// //         )
// // }

// // return(    <div className="w-full py-8 mt-4">
// //         <Container>
// //             <div className="flex  flex-wrap">
// //                 {post.map((post)=>{
                    
// //                         <div className="p-2 w-1/4" key={post.$id}>
// //                             <PostCard {...post}/>
// //                         </div>
                    
// //                 })}
// //                 </div>
// //                 </Container>
// //                 </div>
// // )
// // }
// // export default Home

// import React, { useEffect, useState } from "react"
// import appwriteservice from "../appwrite/conf"
// import { Container } from "../components"
// import PostCard from "../components/Postcard"

// const Home = () => {
//     const [post, setPost] = useState([])

//     useEffect(() => {
//         appwriteservice.getPosts()
//             .then((posts) => {
//                 if (posts) {
//                     setPost(posts.documents)
//                 }
//             })
//     }, [])

//     if (post.length === 0) {
//         return (
//             <div className="w-full py-8 text-center">
//                 <Container>
//                     <h1 className="text-2xl font-bold">
//                         No posts available
//                     </h1>
//                 </Container>
//             </div>
//         )
//     }

//     return (
//         <div className="w-full py-8">
//             <Container>
//                 <div className="flex flex-wrap">
//                     {post.map((post) => (
//                         <div className="p-2 w-1/4" key={post.$id}>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     )
// }

// export default Home


import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/conf";
import {Container} from '../components'
import Postcard from '../components/Postcard';
function Home() {
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        appwriteService.getPosts()
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                } else {
                    setPosts([])
                }
            })
            .catch(() => {
                setPosts([])
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) return <h1 className="text-center py-10">Loading...</h1>

    if (!posts || posts.length === 0) {
        return (
            <h1 className="text-center py-10 text-2xl">
                Login to read posts
            </h1>
        )
    }

    return (
        <div>
            {posts.map(post => (
                <div key={post.$id}>
                    {post.title}
                </div>
            ))}
        </div>
    )
}



export default Home