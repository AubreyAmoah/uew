const root = document.getElementById('root');

const StudentPage = () => {
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
                        <span class="user-bal" class="nav-text__primary margin-right-small">0.00</span>
                    </div>

                    <span id="user-name" class = "nav-text__primary margin-right-small">Joseph</span>
                </div>
            </div>

            <div class="min-container">
                <h1>Recently Accessed Courses</h1>
                <div class="course-container">
                    <div class="card-course__wide margin-left-small">
                        <img src="/assets/notebook-g5ee59b7f0_1280.jpg" alt="">

                        <span>ICTE 219</span>

                        <button>Resume</button>
                    </div>

                    <div class="card-course__wide margin-left-small">
                        <img src="/assets/introduction-g36920128b_1280.jpg" alt="">

                        <span>ICTE 211</span>
                        
                        <button>Resume</button>
                    </div>

                    <div class="card-course__wide margin-left-small">
                        <img src="/assets/computer.jpg" alt="">

                        <span>ICTE 111</span>
                        
                        <button>Resume</button>
                    </div>

                    <div class="card-course__wide margin-left-small">
                        <img src="/assets/watercolor-g.jpg" alt="">

                        <span>GDP 114</span>
                        
                        <button>Resume</button>
                    </div>
                    <div class="card-course__wide margin-left-small">
                        <img src="/assets/notebook-g97d6ed086_1280.jpg" alt="">

                        <span>ICTE 314</span>
                        
                        <button>Resume</button>
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
                        <a class="margin-left-small btn-select select-active" href="">My Courses</a>
                        <a class="margin-left-small btn-select" href="">All Courses</a>
                    </div>

                    <div class="column-three-equal">
                        <div class="card-course flex-column-center margin-top margin-left-small">
                            <img class="card-course__img" src="/assets/watercolor-g.jpg" alt="">
                            <span class="card-course__title margin-top-tiny">GPD 114</span>
                            <button class="card-course__btn margin-top textcenter">View</button>
                        </div>

                        <div class="card-course flex-column-center margin-top margin-left-small">
                            <img class="card-course__img" src="/assets/introduction-g36920128b_1280.jpg" alt="">
                            <span class="card-course__title margin-top-tiny">ICTE 211</span>
                            <button class="card-course__btn margin-top textcenter">View</button>
                        </div>

                        <div class="card-course flex-column-center margin-top margin-left-small">
                            <img class="card-course__img" src="/assets/background-gd03be0f36_1280.jpg" alt="">
                            <span class="card-course__title margin-top-tiny">ICTE 255</span>
                            <button class="card-course__btn margin-top textcenter">View</button>
                        </div>

                        <div class="card-course flex-column-center margin-top margin-left-small">
                            <img class="card-course__img" src="/assets/computer.jpg" alt="">
                            <span class="card-course__title margin-top-tiny">ICTE 111</span>
                            <button class="card-course__btn margin-top textcenter">View</button>
                        </div>

                        <div class="card-course flex-column-center margin-top margin-left-small">
                            <img class="card-course__img" src="/assets/notebook-g5ee59b7f0_1280.jpg" alt="">
                            <span class="card-course__title margin-top-tiny">ICTE 219</span>
                            <button class="card-course__btn margin-top textcenter">View</button>
                        </div>

                        <div class="card-course flex-column-center margin-top margin-left-small">
                            <img class="card-course__img" src="/assets/notebook-g97d6ed086_1280.jpg" alt="">
                            <span class="card-course__title margin-top-tiny">ICTE 341</span>
                            <button class="card-course__btn margin-top textcenter">View</button>
                        </div>
                    </div>
                    <button class="btn-secondary-alt margin-top-big centeritem">All Courses</button>
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

            <div id="overlay" class="overlay hide__all">
                <div class="overlay__item">
                    <div id="overlay-close" class="overlay__item--close">
                        &times;
                    </div>

                    <div class="overlay__item--content-flex">
                        <button class="overlay__item--content-flex__btn">
                            <img class="overlay__item--content-flex__btn--image" src="/assets/graduated.png" alt="">
                            <span id="student-login">Login As Student</span>
                        </button>
                        <button class="overlay__item--content-flex__btn">
                            <img class="overlay__item--content-flex__btn--image" src="/assets/teacher.png" alt="">
                            <span id="instructor-login">Login As Instructor</span>
                        </button>
                    </div>
                </div>
            </div>
        `
    )
}

export {StudentPage}