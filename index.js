// import express from "express"
const express = require('express')


// import runService from './core'


const runMyCronJob = require('./core')

const printDatabase = require('./myDatabase')



// import sendNotification from "./FirebaseCloudMessaging/fcm.js"


const myApp = express()



// import * as fcmJs from "./FirebaseCloudMessaging/fcm.js"



const port = 3000

myApp.get("/", (req, res) => {
    // sendNotification()
    runMyCronJob()

    return res.send("Yeah I am working");
})
myApp.get("/login", (req, res) => {
    console.log("DB Values");
    printDatabase()
    return res.send("You are at Login Route");
})

myApp.listen(port, () => {
    return console.log(`App is Listening in the Port ${port}`);
})
