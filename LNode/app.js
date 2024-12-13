const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

// how to create the Server 
const server=http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='GET'){

        // here i will read and render the eja file 

        const filePath=path.join(__dirname,'views','Form.js');

        fs.readFile(filePath,'utf-8',(err,data)=>{
            if(err){
                return res.end("Something went wrong in your code please correct your code ")
            }
            const html=ejs.render(data);
            res.end(html)
        })
    }else if(req.url==='/submit' && req.method==='POST'){
        let body=''
        req.on('data',(chunk)=>{
            body+=chunk.toString();
        })

        req.on('end',()=>{
            const formData= new URLSearchParams(body);
            console.log(formData)
            const name =formData.get('name')
            const email=formData.get('email')
            const Gender=formData.get('Gender')

            res.end(
                ` <h1>Form Submitted Successfully !!</h1>
                <p> Name : ${name}</p>
                <p> Email : ${email}</p>
                <p> Gender : ${Gender}</p>
                `
            )
        })
    }
})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
