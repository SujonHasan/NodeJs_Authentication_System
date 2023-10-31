const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./user.model");

const users = [];

async function createrUser(req, res){

    try {

        const {firstName, lastName ,email, password} = req.body;

        const existUser = await User.findOne({
            where: {email}
        });

        if(existUser) return res.status(400).send('Already registere');

        const user = await User.create( {
            firstName,
            lastName,
            email,
            password,
        })

        res.status(201).send(user);
    } catch (err) {
        console.log("create user err = ", err);
        res.status(500).send('Internal server error');
    }
}

const login = async (req, res) =>{

    try {

        const { email, password } = req.body;
    
        const user = await User.findOne({
            where: {email}
        })

        if(!user || !user.password || !user.validPassword(password)) {
            return res.status(400).send("Invalid credential");
        }

        const token = jwt.sign({email: user.email, firstName: user.firstName, lastName: user.lastName}, process.env.JWT_SECRET, {expiresIn: '2m', issuer: user.email})

        res.cookie('access_token', token, {
            httpOnly: true
        })

        console.log('token = ', token);

        res.send({user, token});
        
    } catch (err) {
        console.log("login error  = ", err);
        res.status(500).send("Internal Server Error");
    }
}

const getUser = async(req, res) =>{

    try {

        const email = req.user.email;

        const getUser = await User.findOne({
            where: {email}
        })

        if(!getUser) return res.status(401).send("User not Found");
        res.status(500).send(getUser);
        
    } catch (err) {

        console.log("login error  = ", err);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {createrUser, login, getUser}