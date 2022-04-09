
var http = require('http');
var fs=require('fs')
var url = require('url');
var formidable = require('formidable');




http.createServer( (req, res)=>{
    fs.readFile('./index.html',(err,data)=>{
        if(req.url=='fileupload'){
            var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files) {
              var oldpath = files.filetoupload.filepath;
              var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
              fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
              });
         });
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();  
        }
        
    })

}).listen(8080);