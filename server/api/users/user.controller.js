const User  = require('../../model/User');
const Course = require('../../model/Course');
const Chapter = require('../../model/Chapter');
const Video = require('../../model/Video');
const VideoComment = require('../../model/VideoComment');

module.exports = {
    userLogin : async (req, res) => {
        const { address, loggedInType } = req.body;

        const user = await User.findOne({ address });

        if (user) {

            const updatedData = {
                loggin_in_as: loggedInType,
              };

                // Update a single user by ID
            User.updateOne({ _id: user._id }, updatedData)
            .then(result => {
                return res.status(200).json({
                    success: 1,
                    message: 'Login succesful',
                    data:result
                })
            })
            .catch(err => {
                return res.status(400).json({
                    success: 1,
                    message: 'An error occurred',
                    data:err
                })
            });
        } else {
            const new_user = await User.create({
                address,
                loggin_in_as: loggedInType
            })
    
            await new_user.save()
            .then(user => {
                return res.status(200).json({
                    success: 1,
                    message: 'Login succesful',
                    data:user
                })
              })
              .catch(err => {
                return res.status(400).json({
                    success: 1,
                    data: err
                })
              });
        }
    },
    userUpdate : async(req, res) => {
        const { first_name, last_name, address } = req.body;

        const user = await User.findOne({ address });

        if (user) {
            const updatedData = {
                first_name : first_name,
                last_name : last_name
              };
            

            User.updateOne({ _id: user._id }, updatedData)
            .then(result => {
                return res.status(200).json({
                    success: 1,
                    message: 'Update succesful',
                    data:result
                })
            })
            .catch(err => {
                return res.status(400).json({
                    success: 1,
                    message: 'An error occurred',
                    data:err
                })
            });
        } else {
            return res.status(400).json({
                success: 0,
                data:'No user with current address found'
            })
        }
    },
    createCourse : async(req, res) => {
        const {course_code, course_name, enrollment_key, address} = req.body;

        const user = await User.findOne({ address });

        if(user) {
            const course = await Course.findOne({ course_code });

            if(course){
                return res.status(400).json({
                    success: 0,
                    data:'Course already exists'
                })
            } else {
                const new_course = await Course.create({
                    course_name,
                    course_code,
                    enrollment_key,
                    owner : user._id
                })
        
                await new_course.save()
                .then(result => {
                    return res.status(200).json({
                        success: 1,
                        message: 'Course Creation Succesful',
                        data:result
                    })
                  })
                  .catch(err => {
                    return res.status(400).json({
                        success: 1,
                        data: err
                    })
                  });
            }
        } else {
            return res.status(400).json({
                success: 1,
                message: 'Not Authorized'
            })
        }
    },
    getAllCourses : async(req, res) => {
        // Fetch and display all courses
        Course.find().sort({ date_added: -1 })
        .then(courses => {
            return res.status(200).json(courses)
        })
        .catch(err => {
            return res.status(400).json({
                success: 0,
                data:`Error fetching users: ${err}`
            })
        });
    },
    getMyCourses : async(req, res) => {
        const {address} = req.body;

        try {
            const user = await User.find({ address });

            if(user){
                const userID = user[0]._id;
    
                await Course.find({ owner: userID }).sort({ date_added: -1 })
                .then(courses => {
                    return res.status(200).json(courses)
                })
                .catch(err => {
                    return res.status(400).json({
                        success: 0,
                        data:`Error fetching users: ${err}`
                    })
                });
            } else {
                return res.status(400).json({
                    success: 0,
                    data:`UnAuthorized`
                })
            }
        } catch (error) {
            return res.status(500).json({
                success: 0,
                data:error
            })
        }


    },
    getCourse : async(req, res) => {
        const {address} = req.body;

        const user = await User.findOne({ address });

        const userID = user._id;

        await Course.find({ owner: userID })
        .then(courses => {
            return res.status(200).json(courses)
        })
        .catch(err => {
            return res.status(400).json({
                success: 0,
                data:`Error fetching users: ${err}`
            })
        });
    },
    updateCourse : async(req, res) => {
        const {address, course_code, course_name, enrollment_key} = req.body;

        const user = await User.findOne({ address });

        if (user) {
            const userID = user._id;

            const { id } = req.params
    
            const updatedData = {
                course_code,
                course_name,
                enrollment_key
            };

            const course = await Course.findOne({ course_code: updatedData.course_code });
            
            if (course) {
                return res.status(200).json({
                    success: 0,
                    message: 'Course code already exits',
                    data: course
                })
            } else {
                await Course.findOneAndUpdate({ _id:id, owner: userID },updatedData)
                .then(results => {
                    return res.status(200).json({
                        success: 1,
                        message: 'Updated Succesfully',
                        data: results
                    })
                })
                .catch(err => {
                    return res.status(400).json({
                        success: 0,
                        data:err
                    })
                });
            }
        }
    },
    updateCourseImage : async(req, res) => {
        const {address, course_cover} = req.body;

        const user = await User.findOne({ address });

        if (user) {
            const userID = user._id;

            const { id } = req.params
    
            const updatedData = {
                course_cover
              };
    
            await Course.findOneAndUpdate({ _id:id, owner: userID },updatedData)
            .then(results => {
                return res.status(200).json({
                    success: 0,
                    message: 'Updated Succesfully',
                    data: results
                })
            })
            .catch(err => {
                return res.status(400).json({
                    success: 0,
                    data:err
                })
            });
        }
    },
    findCourseByName : async(req, res) =>{
        const searchString = req.query.q; // The substring to search for
    
        // Find users with usernames containing the search string
        Course.find({ course_name: { $regex: searchString, $options: 'i' } })
          .then(courses => {
                return res.status(200).json(courses)
          })
          .catch(err => {
                return res.status(400).json({
                    success: 0,
                    data:`Error fetching users: ${err}`
                })
          });
    },
    deleteCourseByID : async(req, res) => {
        const {address} = req.body;

        const user = await User.findOne({ address });

        if (user) {
            const userID = user._id;

            const { id } = req.params;
    
            await Course.deleteOne({_id:id, owner: userID})
            .then(results => {
                return res.status(200).json({
                    success: 0,
                    message: 'Deleted Succesfully',
                    data: results
                })
            })
            .catch(err => {
                    return res.status(400).json({
                        success: 0,
                        data:`Error fetching users: ${err}`
                    })
            });
        } else {
            return res.status(400).json({
                success:0,
                data:`You do not own this course`
            })
        }
    },

    //Chapters
    createChapter : async(req, res) => {
        const {address, chapter_name, parent} = req.body;

        const user = await User.findOne({ address });


        if (user) {
            const userID = user._id;

            const {id} = req.params

            const course = await Course.find({id: id, owner: userID })


            if (course) {
                const chapter = await Chapter.findOne({chapter_name});

                if(chapter_name){
                    return res.status(400).json({
                        success: 0,
                        message: 'Chapter already exists',
                        data:`UnAuthorized`
                    })
                } else {
                    const new_chapter = await Chapter.create({
                        chapter_name,
                        parent: course[0]._id
                    })
            
                    await new_chapter.save()
                    .then(result => {
                        return res.status(200).json({
                            success: 1,
                            message: 'succesful',
                            data:result
                        })
                      })
                      .catch(err => {
                        return res.status(400).json({
                            success: 1,
                            data: err
                        })
                      });
                }
            } else {
                return res.status(400).json({
                    success: 1,
                    data: `invalid course`
                })
            }
        }
    },
    updateChapter : async(req, res) => {
        const {address, chapter_cover, chapter_name} = req.body;

        const user = await User.findOne({ address });

        if (user) {
            const userID = user._id;

            const {id} = req.params

            const query = await Course.findOne({id: id, chapters:[{chapter_name}], owner: userID });
            const chapter = query.chapters[0].chapter_name;

            const updatedData = {
                chapters : {
                    chapter_cover,
                    chapter_name
                }
              };
    
            await Course.updateOne({ _id:id },updatedData)
            .then(results => {
                return res.status(200).json({
                    success: 1,
                    message: 'Updated Succesfully',
                    data: results
                })
            })
            .catch(err => {
                return res.status(400).json({
                    success: 0,
                    data:err
                })
            });
        }
    }

}