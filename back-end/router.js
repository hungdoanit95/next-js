import express from 'express';
const app = express();
const showData = (data) => {
    app.use(function (req, res, next) {
        console.log('first next');
        next();
    });
    app.get('/v1/works/', function (req,res) {
        let data_show = data ? data : 'No data';
        res.send(data_show);
    });
    app.get('/v1/works/:id', function (req, res) {
        res.send("ID: "+req.params.id);
    });
    app.get('/', function (req, res, next) {
        res.send("Home Page");
        next();
    })
    app.use('/', function (req, res) {
        console.log('end');
    })
}
const runServer = () => {
    app.listen('8080',function(){
        console.log("Server is running");
    });
}
export { showData,runServer };