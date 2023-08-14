const path = require('path');
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
    getUser: async(req, res) => {
        const { address } = req.params;

        await User.findOne({ address })
        .then(user => {
            console.log(user)
            return res.status(200).json({user})
          })
          .catch(err => {
            return res.status(400).json({
                success: 1,
                data: err
            })
          });
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
        const { address } = req.params;

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
        const {address, chapter_name} = req.body;

        const user = await User.findOne({ address });


        if (user) {
            const userID = user._id;

            const {id} = req.params

            const course = await Course.find({_id: id, owner: userID })



            if (course) {
                const chapter = await Chapter.findOne({chapter_name});

                if(chapter){
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
        const { address, chapter_name } = req.body;

        const user = await User.findOne({ address });

        const { id } = req.params;

        if (user) {
            const updatedData = {
                chapter_name
              };

            const chapter = await Chapter.findOne({chapter_name});

            if (chapter) {
                return res.status(400).json({
                    success: 0,
                    message: 'name already used'
                })
            } else {
                Chapter.updateOne({ _id: id }, updatedData)
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
            }
        } else {
            return res.status(400).json({
                success: 0,
                data:'No user with current address found'
            })
        }
    },
    getChapter : async(req, res) => {
        const { chapter_name } = req.body
        const { id } = req.params

        await Chapter.findOne({ chapter_name, parent : id })
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
    getAllChapters : async(req, res) => {
        // Fetch and display all courses
        const { id } = req.params;

        Chapter.find({parent: id}).sort({ date_added: -1 })
        .then(chapters => {
            return res.status(200).json(chapters)
        })
        .catch(err => {
            return res.status(400).json({
                success: 0,
                data:`Error fetching users: ${err}`
            })
        });
    },
    findChapterByName : async(req, res) =>{
        const searchString = req.query.q; // The substring to search for

        const { id } = req.params
    
        // Find users with usernames containing the search string
        Chapter.find({ chapter_name: { $regex: searchString, $options: 'i' }, parent: id})
          .then(courses => {
                return res.status(200).json(courses)
          })
          .catch(err => {
                return res.status(400).json({
                    success: 0,
                    data:err
                })
          });
    },


    // video
    createVideo : async(req, res) => {
        const {chapter_id} = req.params;
        const { address, video_title, video_description } = req.body

        const user = await User.findOne ({ address });

        if (user) {
            const files = req.files

            const chapter = await Chapter.findById({_id: chapter_id});

            if (chapter) {
                let url;
    
                Object.keys(files).forEach(key => {
                    const filepath = path.join(__dirname, `../../files/${user.address}`, files[key].name);
                    url = `localhost:3000/${user.address}/${files[key].name}`
    
                    files[key].mv(filepath, (err) => {
                        if(err) return res.status(500).json({ success: 0, message: err })
                    })
                })
    
                const new_video = await Video.create({
                    video_title,
                    video_description,
                    video_path : url,
                    parent: chapter._id
                })
        
                await new_video.save()
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
            } else {
                return res.status(400).json({
                    success: 0,
                    message: 'Unauthorized Chapter'
                })
            }
        } else {
            return res.status(400).json({
                success: 0,
                message: 'Unauthorized'
            })
        }
    },
    getAllVideos: (req, res) => {
        // Fetch and display all courses
        const { id } = req.params; // id of parent chapter

        Video.find({parent: id}).sort({ date_added: -1 })
        .then(videos => {
            return res.status(200).json(videos)
        })
        .catch(err => {
            return res.status(400).json({
                success: 0,
                data:`Error fetching users: ${err}`
            })
        });
    },
    getVideo: async(req, res) => {
        const { video_id } = req.body
        const { id } = req.params // parent chapter id

        await Video.findOne({ _id: video_id, parent : id })
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
    findVideoByName : async(req, res) =>{
        const searchString = req.query.q; // The substring to search for

        const { id } = req.params // chapter id
    
        // Find users with usernames containing the search string
        Video.find({ video_title : { $regex: searchString, $options: 'i' }, parent: id})
          .then(videos => {
                return res.status(200).json(videos)
          })
          .catch(err => {
                return res.status(400).json({
                    success: 0,
                    data:err
                })
          });
    },
    deleteVideo : async(req, res) => {
        const {address, video_id} = req.body;

        const user = await User.findOne({ address });

        if (user) {
            const comments = await VideoComment.find({ parent: video_id})

            if(comments) {
                await VideoComment.deleteMany(comments)
                .then(results => {

                })
                .catch(err => {
                    return res.status(400).json({
                        success: 0,
                        data:err
                    })
                })

                await Video.deleteOne({_id: video_id})
                .then(results => {
                    res.status(200).json({
                        success: 1,
                        message: 'deleted succesfully',
                        data: results
                    })
                })
                .catch(err => {
                    return res.status(400).json({
                        success: 0,
                        data:err
                    })
                })
            } else {
                await Video.deleteOne({_id: video_id})
                .then(results => {
                    res.status(200).json({
                        success: 1,
                        message: 'deleted succesfully',
                        data: results
                    })
                })
                .catch(err => {
                    return res.status(400).json({
                        success: 0,
                        data:err
                    })
                })
            }
        } else {
            return res.status(400).json({
                success:0,
                data:`You do not own this course`
            })
        }
    },

    //Video Comments
    createVideoComment : async(req, res) => {
        const {comment_content, video_id, address} = req.body;

        const user = await User.findOne({ address });

        if(user) {
            const video = await Video.findOne({ video_id });

            if(video){
                const new_comment = await VideoComment.create({
                    comment_content,
                    owner : user._id,
                    parent: video._id
                })
        
                await new_comment.save()
                .then(result => {
                    return res.status(200).json({
                        success: 1,
                        message: 'Sent',
                        data:result
                    })
                  })
                  .catch(err => {
                    return res.status(400).json({
                        success: 1,
                        data: err
                    })
                  });
            } else {
                return res.status(400).json({
                    success: 0,
                    data:'Video does not exist'
                })
            }
        } else {
            return res.status(400).json({
                success: 1,
                message: 'Not Authorized'
            })
        }
    },
    getVideoComments : async(req, res) => {
        const {video_id, address} = req.body;

        const user = await User.findOne({ address });

        if (user) {
            await VideoComment.find({parent: video_id}).sort({ date_added: -1 })
            .then(comments => {
                return res.status(200).json(comments)
            })
            .catch(err => {
                return res.status(400).json({
                    success: 0,
                    data:`Error fetching users: ${err}`
                })
            });
        }
    }
}
