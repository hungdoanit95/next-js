import express from 'express';
const router = () => {
    const app = express();
    app.get('/',function(req,res){
        res.send("Hello AE");
    });

    app.listen('8080',function(){
        console.log("Server is running");
    });
}
export { router }