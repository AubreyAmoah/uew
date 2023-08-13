const root = document.getElementById('root');
let HomePage = () => {
    return (
        root.innerHTML = `
            <div id="alert" class="alert hide__all">
                <img id="alert-image" class="alert__img margin-left-tiny" src="" alt="">
                <span id="alert-text" class="alert__text margin-left-small"></span>
            </div>
            <div class="header">
                <div class="navbar header__one flexend">
                    <button id="login-btn" class="btn btn-red margin-right-small">Login</button>
                </div>
                <div class="navbar header__nav flexbetween">
                    <div class="navbar flextop margins-left-right">
                        <img src="/assets/uew_logo.png" alt="" class="header__nav--logo margin-right-small">
                        <h1 class="heading-main font-color-white font-heading-big">
                            UEW 3.0
                        </h1>
                    </div>
                    <div class="search-box-container">
                        <input type="text" class="search-box margins-left-right" placeholder="Search Courses">
                        <img src="/assets/search-black.png" alt="search img" class="search-box__image">
                    </div>
                </div>
                <div class="navbar nav-medium flexcenter">
                    <div class="navbar announcements">
                        <div class="announcements__start">
                            ANNOUNCEMENTS
                        </div>
                        <div class="navbar announcements__end flexbetween">
                            <marquee>
                                No news items to display
                            </marquee>
            
                            <img class="announcements__end--image" src="assets/pause.png" alt="">
                        </div>
                    </div>
                </div>

                <div class="carousel">
                    <div class="carousel__image-container">
                        <img class="carousel__image-container--image" src="/assets/Entrance (1) (1).jpg" alt="image 1">
                    </div>

                    <div class="carousel__dots navbar flexcenter margin-top-tiny">
                        <button class="carousel__dots--item"></button>
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

export {HomePage}