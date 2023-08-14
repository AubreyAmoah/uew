const root = document.getElementById('root');
let InstructorPage = () => {
    return (
        root.innerHTML = `
            <div id="alert" class="alert hide__all">
                <img id="alert-image" class="alert__img margin-left-tiny" src="" alt="">
                <span id="alert-text" class="alert__text margin-left-small"></span>
            </div>
            <div class="header">
                <div class="navbar header__one flexend">
                    <button class="btn btn-transparent">
                        <img class="icon_small" src="/assets/user-white.png" alt="">
                    </button>
                    <div class="flex">
                        <img class="icon_small" src="/assets/coin.png" alt="">
                        <span id="balance" class="nav-text__primary margin-right-small"></span>
                    </div>
                
                    <span id="getfname" class = "nav-text__primary margin-right-small"></span>
                </div>
                </div>
                
                <div class="min-container">
                <h1>Recently Created Courses</h1>
                <div id="recent_courses" class="course-container">
                    <div id="course" class="card-course__wide margin-left-small">
                        <img id="course_img" src="/assets/notebook-g5ee59b7f0_1280.jpg" alt="">
                
                        <span id="course_code">ICTE 219</span>
                
                        <button id="edit_course_btn">Edit</button>
                    </div>
                </div>
                </div>
                
                <div class="body column-two-first margin-top">
                <div class="">
                    <div class="navbar">
                        <div class="search-box-container search-box-container-alt margin-left-small">
                            <input type="text" class="search-box" placeholder="Search Courses">
                            <img src="/assets/search-black.png" alt="search img" class="search-box__image">
                        </div>
                        <button class="btn-secondary margin-left-tiny">Go</button>
                    </div>
                
                    <div class="margin-top-small">
                        <button id="my_courses_btn" class="margin-left-small btn-select select-active">My Courses</button>
                        <button id="new_courses_btn" class="margin-left-small btn-select">New Course</button>
                    </div>
                
                    <div id="my_courses_list" class="column-three-equal">
                        <div class="card-course flex-column-center margin-top margin-left-small">
                            <img class="card-course__img" src="/assets/watercolor-g.jpg" alt="">
                            <span class="card-course__title margin-top-tiny">GPD 114</span>
                            <button class="card-course__btn margin-top textcenter">View</button>
                        </div>
                    </div>

                    <div id="new_courses_list">
                        <div class="">
                            <input type="text" name="course_code" id="course_code" placeholder="Course Code">
                            <input type="text" name="course_name" id="course_name" placeholder="Course Name">
                            <input type="text" name="enrollment_key" id="enrollment_key" placeholder="Enrollment Key">
                            <button id="create_course_btn">Create</button>
                        </div>
                    </div>

                </div>
                
                <div class="">
                    <div class="notification margin-bottom">
                        <h2 class="margin-bottom-small">Notifications</h2>
                        <div class="notification__container">
                            <div class="notification margin-bottom-small column-six-second">
                                <img class="icon_small" src="/assets/notification.png" alt="">
                                <span>You have an upcoming quiz on monday</span>
                            </div>
                
                            <div class="notification margin-bottom-small column-six-second">
                                <img class="icon_small" src="/assets/notification.png" alt="">
                                <span>Assignment submition for ICTE 111 is due please made sure you submit your assingments on time</span>
                            </div>
                
                            <div class="notification margin-bottom-small column-six-second">
                                <img class="icon_small" src="/assets/notification.png" alt="">
                                <span>Upcoming Class in an hour time</span>
                            </div>
                        </div>
                    </div>
                    <div class="notification">
                        <h2 class="margin-bottom-small">Forums</h2>
                        <div class="notification__container">
                            <div class="margin-bottom-small column-six-second">
                                <div class="">
                                    <img class="icon_medium margin-bottom-tiny" src="/assets/avatar.png" alt="">
                                </div>
                                <div class="forum-chat">
                                    <span class="forum-chat__message">When is the quiz coming off</span>
                                    <span class="forum-chat__user">Dan</span>
                                    <span class="forum-chat__time">Mon, 11:55pm</span>
                                </div>
                            </div>
                
                            <div class="margin-bottom-small column-six-second">
                                <div class="">
                                    <img class="icon_medium margin-bottom-tiny" src="/assets/avatar.png" alt="">
                                </div>
                                <div class="forum-chat">
                                    <span class="forum-chat__message">Probably on monday</span>
                                    <span class="forum-chat__user">Afia</span>
                                    <span class="forum-chat__time">Tue, 03:55am</span>
                                </div>
                            </div>
                
                            <div class="margin-bottom-small column-six-first">
                                <div class="me-chat">
                                    <span class="forum-chat__message">Hello guys.....</span>
                                    <span class="forum-chat__user">Me</span>
                                    <span class="forum-chat__time">Tue, 03:55am</span>
                                </div>
                
                                <div class="margin-left-small">
                                    <img class="icon_medium margin-bottom-tiny" src="/assets/avatar.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="send-chat">
                            <input type="text" name="" id="" class="">
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="overlay-setup" class="overlay hide__all">
                <div class="overlay__item">

                    <span class="overlay__item--heading">You need to set up your name</span>

                    <div class="overlay__item--content-flex__close">
                        <input type="text" name="first_name" id="first_name" placeholder="first name">
                        <input type="text" name="last_name" id="last_name" placeholder="last name">
                    </div>

                    <button id="btn_save_setup" class="overlay__item--btn-bottom">Save</button>
                </div>
            </div>
        `
    )
}

export {InstructorPage}
