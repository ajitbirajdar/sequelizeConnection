// const connection =require('../connection/mysql.connection');
const connection=require('../connection/sequlize.connection')

const bcrypt=require('bcrypt');
const {validationResult} =require('express-validator')
module.exports ={

    getAll:(req,res)=>{

    //    let id= req.user.StudID;
    connection.query(`select StudID, Name, Email, Mobile, profileUrl, Age  from student`).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send(err.message);
    })
    // ,(err, result)=>{

    
        //      if(err){
    //          res.send({error:true, message:err.message})
    //      }else{
    //         res.send({error:false, data:result})
    //      }
    //  })
    },
    createUser:(req,res)=>{

       let errors=validationResult(req);
       if(!errors.isEmpty()){
        res.send({error:true,errors:errors.array()});
       }else{

        let salt=bcrypt.genSaltSync(10);
        let hashPassword=bcrypt.hashSync(req.body.Password,salt);

        // connection.query(`INSERT INTO student(StudID, Name, Email, Mobile, profileUrl, Age, password) VALUES (0,'${req.body.Name}','${req.body.Email}','${req.body.Mobile}','${req.body.ProfileUrl}',${req.body.Age},'${hashPassword}')`,(err, result)=>{
        //     if(err){
        //         res.send({error:true, message:err.message})
        //     }else{
        //        if(result.affectedRows>0){
        //         res.send({error:false, message:"New User created with Id "+result.insertId})
        //        }else{
        //         res.send({error:false, message:"New User not created"})
        //        }
              
        //     }
        // })
        res.end()
       }


       


    }
    // updateUser:(req,res)=>{

    // },
    // searchUser:(req,res)=>{

    // }

}