const expressAsyncHandler = require("express-async-handler")
const dotenv = require("dotenv");
const User = require("../../models/RegisterSchema");
const { connect } = require("mongoose");
const fs = require('fs');
dotenv.config();
const createProfile = expressAsyncHandler(async (req, res) => {
    try {
        // console.log(req.body.userData,"first")
        if (req.body && req.body.userData) {
            const userData = JSON.parse(req?.body?.userData)
            const profileimg = req?.files && req?.files?.profileimg && req?.files?.profileimg[0].filename;
            const idUser = userData?.id;

            console.log(userData, 'running')
            const imgupdate = await User.findById(idUser);
            // console.log(imgupdate);
            function updateimg(profile, text) {
                console.log(profile, "profile")
                if (profile) {
                    fs.unlink(`./profile/${profile}`, err => {
                        if (err) {
                            console.error(`Error deleting ${profile}: typr${text}`, err)
                        } else {
                            console.log(`${profile}:type${text} deleted successfully...by api`)
                        }
                    })
                } else {
                    console.log("not file found")
                    res.status(204).send({ msg: "some erro", success: false })
                }
            }

            if (imgupdate.Profileimage) {

                updateimg(imgupdate?.Profileimage, "profile of user")

            } else {
                console.log("false")
                // new  image od user
            }


            console.log(idUser, 'iwjiefj')
            if (idUser) {
                const profile = {
                    username: userData.username,
                    Profileimage: profileimg,
                    firstname: userData.firstname,
                    lastname: userData.lastname,
                    number: userData.number,
                };

                const updatedProfile = await User.findOneAndUpdate(
                    { _id: idUser },
                    profile,
                    { new: true }
                ).select('-password')
                console.log(updatedProfile.password, "updatedProfile")
                if (updatedProfile) {
                    res.status(200).send({ data: updatedProfile, success: true });
                } else {
                    res.status(400).send({ msg: 'Failed to update user profile' });
                }
            } else {
                res.status(400).send({ msg: 'Failed to find user ID' });
            }
        }
    } catch (error) {
        res.status(500).send({ msg: 'Server error', error: error.message });
    }

});

const deleteimg = expressAsyncHandler(async (req, res) => {

    try {


        const userID = req?.body?.id


        if (userID) {
            const userinfo = await User.findById(userID);

            if (userinfo) {

                function updateimg(profile, text) {
                    console.log(profile, "profile")
                    if (profile) {
                        fs.unlink(`./profile/${profile}`, err => {
                            if (err) {
                                console.error(`Error deleting ${profile}: typr${text}`, err)
                            } else {
                                console.log(`${profile}:type${text} deleted successfully...by api`)
                            }
                        })
                    } else {
                        console.log("not file found")
                        res.status(204).send({ msg: "some erro", success: false })
                    }
                }

                if (userinfo.Profileimage) {
                    const updateResult = await User.updateOne({ _id: userID }, { $unset: { Profileimage: 1 } });
                    updateimg(userinfo?.Profileimage, "profile of user")
                    res.status(200).send({ data: updateResult, success: true, msg: "profile  image is  delete" })

                } else {
                    res.status(201).send({ msg: "image not found ", success: false })
                }



            } else {
                res.status(203).send({ msg: 'No user found with this userID', success: false });
            }
        } else {
            res.status(204).send({ msg: 'Please provide a userID', success: false });
        }



    } catch (error) {
        res.status(500).send({ msg: 'Server error', error: error.message });
    }



})

const findprofile = expressAsyncHandler(async (req, res) => {
    try {
        const userId = req.body.id
        if (userId) {
            try {
                const Userfind = await User.findById(userId).select('-password');
                console.log('Userfind before deletion:', Userfind);

                if (Userfind && Userfind.password) {
                    delete Userfind.password;
                }

                // console.log('Userfind after deletion:', Userfind);

                res.status(200).send({ data: Userfind, success: true });
            } catch (error) {
                console.error('Error fetching user:', error);
                res.status(500).send({ msg: 'Internal server error', success: false });
            }
        } else {
            res.status(400).send({ msg: 'Please provide a userId', success: false });
        }



    } catch (error) {
        res.status(500).send({ msg: 'Server error', error: error.message });

    }

})








module.exports = { createProfile, findprofile, deleteimg }