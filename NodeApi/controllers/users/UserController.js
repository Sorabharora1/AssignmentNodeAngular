const Model = require("../../models/")
const User = Model.user
var uuid = require('uuid-random');
const utils = require("../../helpers/functions.js")
const isEmpty = utils.isEmpty

//Get users by user_id and phoneno
exports.usersList = (req, res) => {
    console.log(req.query)
    var phoneno = req.query.phoneno;
    var user_id = req.query.user_id;
    if (user_id != '' && phoneno != '') {
        User.findAll({ where: { phone_no: req.query.phoneno, id: req.query.user_id } }).then(results => {
            if (results.length > 0) {
                res.status(200).json({
                    message: "success",
                    status: true,
                    result: results
                })
            } else {
                res.status(200).json({
                    message: "notFound",
                    status: true,
                    result: results
                })
            }
        }).catch(err => {
            res.status(400).json({
                message: err.message,
                status: false,
                result: {}
            })
        })
    } else {
        User.findAll({}).then(results => {
            if (results.length > 0) {
                res.status(200).json({
                    message: "success",
                    status: true,
                    result: results
                })
            } else {
                res.status(200).json({
                    message: "notFound",
                    status: true,
                    result: results
                })
            }
        }).catch(err => {
            res.status(400).json({
                message: err.message,
                status: false,
                result: {}
            })
        })
    }
}

//Create user
exports.createUser = (req, res) => {
    // const {name, lastname,email, phoneno } = req.body   //destructing
    var name = req.body.name;
    var email = req.body.email;
    var lastname = req.body.lastname;
    var phoneno = req.body.phoneno;
    console.log(name, email, lastname, phoneno);
    if (isEmpty(name) || isEmpty(lastname) || isEmpty(email) || isEmpty(phoneno)) {
        res.status(400).send({
            status: false,
            message: "Please fill all the required field.",
            result: {}
        })
        return;
    }
    const user = User.create({
        name: name,
        last_name: lastname,
        email: email,
        phone_no: phoneno,
        status: '1',
    }).then(saved => {
        console.log("result---", user);
        res.status(200).json({
            message: "success",
            status: true,
            result: saved
        })
    }).catch(err => {
        res.status(400).json({
            message: err.message,
            status: false,
        })
    })
}

//Create user
exports.createUser = (req, res) => {
    const { name, lastname, email, phoneno } = req.body //destructing
    if (isEmpty(name) || isEmpty(lastname) || isEmpty(email) || isEmpty(phoneno)) {
        res.status(400).send({
            status: false,
            message: "Please fill all the required field.",
            result: {}
        })
        return;
    }
    const user = User.create({
        name: name,
        last_name: lastname,
        email: email,
        phone_no: phoneno,
        status: '1',
    }).then(saved => {
        res.status(200).json({
            message: "success",
            status: true,
            result: saved
        })
    }).catch(err => {
        res.status(400).json({
            message: err.message,
            status: false,
        })
    })
}

//exports.deleteUser = (req, res) => {     
// const {user_id, phoneno } = req.body        //destructing
// if ( !isEmpty(user_id) || !isEmpty(phoneno)) { 
//     User.destroy({ where: { id: user_id, phone_no: phoneno } } ).then(results => { 
//         res.status(200).json({
//             message: "success",
//             status: true,
//         })
//     }).catch(err => {
//         res.status(400).json({
//             message: err.message,
//             status: false,
//         })
//     })
// }else{ 
//     User.destroy( { where: {}, truncate: true }).then(results => { 
//         res.status(200).json({
//             message: "success",
//             status: true,
//         })
//     }).catch(err => {
//         res.status(400).json({
//             message: err.message,
//             status: false,
//         })
//     })
// }   
//} 

//Delete User 
exports.deleteUser = function(req, res) {
    var where = { id: req.params.id }
    console.log(where);
    User.destroy({ where: where, truncate: false }).then(results => {
        res.status(200).json({
            message: "success",
            status: true,
        })
    }).catch(err => {
        res.status(400).json({
            message: err.message,
            status: false,
        })
    })
};

//Update user 
exports.updateUser = (req, res) => {
    const { user_id, name, lastname, email, phoneno } = req.body //destructing
    if (!isEmpty(user_id) || !isEmpty(phoneno) || !isEmpty(name) || !isEmpty(lastname) || !isEmpty(email)) {
        User.update({ name: name, email: email, lastname: lastname, phone_no: phoneno }, { where: { id: user_id, phone_no: phoneno } }).then(results => {
            res.status(200).json({
                message: "success",
                status: true,
            })
        }).catch(err => {
            res.status(400).json({
                message: err.message,
                status: false,
            })
        })
    } else {
        User.update({ name: name, lastname: lastname, phone_no: phoneno }, { where: {} }).then(results => {
            res.status(200).json({
                message: "success",
                status: true,
            })
        }).catch(err => {
            res.status(400).json({
                message: err.message,
                status: false,
            })
        })
    }
}

//get all user
module.exports.getDetails = (req, res) => {
    User.findAll({}).then(results => {
        if (results.length > 0) {
            res.status(200).json({
                message: "success",
                status: true,
                result: results
            })
            console.log("user");
        }
    })
}