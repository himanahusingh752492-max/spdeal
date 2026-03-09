import { redirect } from "react-router-dom";


export function auth(req,res,next) {
    

console.log(req.cookies)
const user=  req.cookies.user;

console.log(user)
if(!user|| (user==='undefined')){
   return res.send("please login first")
   
}
else{
     next();
}
   



}


