
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import {hash} from "bcrypt"
export async function POST(req:Request) {

    try {
        const body=await req.json();

        const {email,username,password}=body;
        const existingUserByEmail=await db.user.findUnique({
            where:{
                email:email
            }
        })
        if(existingUserByEmail){
            return NextResponse.json({
                user:null,
                message:"Email already exists",

            })
        }const existingUserByUsername=await db.user.findUnique({
            where:{
                username:username
            }
        })
        if(existingUserByEmail){
            return NextResponse.json({
                user:null,
                message:"Eamil already exists",

            },{status:401})
        }
        if(existingUserByUsername){
            return NextResponse.json(
                {user:null,
                    message:"Username already exists"},
                {
                    status:401
                }
            )
        
        }
        const hashPassword=await hash(password,10)
        const newUser=await db.user.create({
            data:{
                email,
                username,
                password:hashPassword
            }
        })
        const {password:newUserPassword,...rest}=newUser
        return NextResponse.json({user:rest,message:"User has been created succesfully"},{status:200});
    } catch (error) {
        
    }
    
}