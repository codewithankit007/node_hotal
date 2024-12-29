const express=require('express')
const app=express();
const db=require('./db')
const person=require('./models/Person')
const menu=require('./models/Menu')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.get('/',function (req,res){
    res.send('this is sever  fundkkof')
})
app.post('/person',async(req,res)=>
{   try
    {
          const data=req.body;
    const newPerson=new person(data);
    const response=await newPerson.save();
   console.log("data saved");
   res.status(200).json(response);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({error:'Internal server error'})
    }
  
  
    })
    app.post('/menu',async(req,res)=>
        {   try
            {
                  const data=req.body;
            const newPerson=new menu(data);
            const response=await newPerson.save();
           console.log("data saved");
           res.status(200).json(response);
            }
            catch(error)
            {
                console.log(error);
                res.status(500).json({error:'Internal server error'})
            }
          
          
            })
    app.get('/person',async(req,res)=>
    {
        try{
            const data=await person.find();
            console.log("data fetched");
            res.status(200).json(data);
        }catch(err)
        {
            console.log(err);
            res.status(500).json({error:"internal server error"});
        }
    })
    app.get('/menu',async(req,res)=>
    {
        try{
            const data=await menu.find();
            console.log("data fetched");
            res.status(200).json(data);
        }catch(err)
        {
            console.log(err);
            res.status(500).json({error:"internal server error"});
        }
    })
// app.post('/person',(req,res)=>{

// })
app.listen(3000,()=>
{console.log('port 300 startedd')});