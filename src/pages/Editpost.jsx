import React from 'react'
import { Container,Postform } from '../components'
import appwriteService from '../appwrite/conf'
import { useNavigate, useParams } from 'react-router-dom'
const Editpost = () => {
    const [posts, setposts] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
      if(slug){
        appwriteService.getPost(slug).then((post)=>{
            if(post){
                setposts(post)
            }
        })
      }
      else{
        navigate("/")
      }
    
     
    
    }, [slug,navigate])
    
  return (
    posts ?
    <div className='py-8'>
 <Container>
    <Postform post={posts}/>
</Container>
    </div> : null
  )
}

export default Editpost