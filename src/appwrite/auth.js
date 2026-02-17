import config from "../config/config";
import {client ,Account,ID} from "appwrite";

class AuthService{
    client = new client();
    account
    constructor(){
        this.client
        .setEndpoint(config.appwriteurl)
        .setProject(config.appwriteprojectid);
        this.account = new Account(this.client);

    }

    async createAccount({email,password,name}){
        try {
               const useraccount = await this.account.create({userId : ID.unique(),email,password,name});
            if(useraccount){
                return this.login({email,password})
            }
            else{
                return useraccount
            }
        } catch (error) {
            throw error
        }
         
        

    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession({email,password}) 
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error
            
        }
        return null
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();
export default authService;
