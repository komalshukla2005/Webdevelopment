const AddTowNumbers=(req,res)=>{
    const body=[];
    req.on('data',(chunk)=>{
        body.push(chunk)
    })
    req.on('end',()=>{
        const parsedBody=Buffer.concat(body).toString();
        const params=new URLSearchParams(parsedBody)

        const num1=parseInt(params.get('First'))
        const num2=parseInt(params.get('Second'))

        const operation=params.get('operation')
        console.log(operation)
        let result;
        if(operation==='add'){
            result=num1+num2;
        }else if(operation==='multiply'){
            result=num1*num2;
        }else if(operation==='subtract'){
            result=num1-num2;
        }
        res.end(`
            <h1>This is the Result of the Calculation</h1>
            <p>The calculation  of the ${operation}  of ${num1} and ${num2} is that : ${result}</p>
            <a href="/">Go Back to Home</a>
            `)
    })
}
exports.AddTowNumbers=AddTowNumbers;