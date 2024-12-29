const mysql=require('mysql')
const con=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"mydb"
    }
);
con.connect((err)=>
{
    if(err)
    {
        console.warn("not tt connected");
    }
    else
    {
        console.warn("connected");
    }
})
con.query("select * from users",(err,result)=>
{
    console.warn("result",result)
})
// this is exampa;