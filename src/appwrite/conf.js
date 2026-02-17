import config from "../config/config";
import { Client, Databases, ID, Query, Storage } from "appwrite";

class Service {
  client;
  databases;
  storage;

  constructor() {
    this.client = new Client()
      .setEndpoint(config.appwriteurl)        
      
      .setProject(config.appwriteprojectid
      );  

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  // Create a new post
  async createPost({ title, slug, content, featuredImage, author, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwritedatabaseid, 
        config.appwritecollectionid,    
        slug,                // unique row/document ID
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
    )
    } catch (error) {
      console.error("Create Post Error:", error);
      throw error;
    }
  }


  //update method
  async  updatePost(slug,{ postId, title,content, featuredImage, author, status }) {
    try {
        
        return await this.databases.updateDocument(
            config.appwritedatabaseid,
            config.appwritecollectionid,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
            }
        )
    } catch (error) {
    console.error("Update Post Error:", error);
        
    }  

}
  


//delete method
async deletePost(slug){
    try {
         await this.databases.deleteDocument(
            config.appwritedatabaseid,
            config.appwritecollectionid,
            slug
        )
        return true 
    } catch (error) {
        console.log('error in delete ',error);
        return false
        
    }
}


//get one documnet
async getPost(slug){
    try {
        return await this.databases.getDocument(
            config.appwritedatabaseid,
            config.appwritecollectionid,
            slug
        )

    } catch (error) {
        log('error in get post ',error);
    }
}

// get all posts
async getPosts(quries=[Query.equal('status','active')]){
    try {
        return await this.databases.listDocuments(
            config.appwritedatabaseid,
            config.appwritecollectionid,
            quries,
        )
    } catch (error) {
        log('error in get posts ',error);
        return false
    }
}

//file upload services
async uploadFile(file){
    try {
         return await this.storage.createFile(
            config.appwritebucketid,
            ID.unique(),
            file,
        )
         
    } catch (error) {
        console.log('error in file upload ',error);
        return false
    }
}


//delete file
async deletefile(fileId){
    try {
        return await  this.storage.deleteFile(
            config.appwritebucketid,
            fileId
            
        )
        return true
    } catch (error) {
        console.log('error in delete file ',error);
        return false
    }
}

//file preview
 getFilePreview(fileId){
    try {
        return  this.storage.getFilePreview(
            config.appwritebucketid,
            fileId
        )
    } catch (error) {
        console.log('error in file preview ',error);
    }
}

//download file
getFileDownload(fileId){
    try {
        return  this.storage.getFileDownload(
            config.appwritebucketid,
            fileId
        )
        return true
    } catch (error) {
        console.log('error in file download ',error);
        return false
    }
}
}

const service = new Service();
export default service;
