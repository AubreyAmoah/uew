import { homePage } from './functionality/HomePageLogic.mjs';
import { studentPage } from './functionality/StudentPageLogic.mjs';

// Function to update the content based on the current route
function updateContent() {
    const path = window.location.pathname;

    if (path === '/') {
        homePage();
    } else if (path === '/student') {
        studentPage();
    } else if (path === '/dash') {

    } else {
        homePage();
    }
}

// Function to handle navigation and update content when URL changes
function handleRouting() {
    // Call updateContent initially to show the correct content for the current route
    updateContent();

    // Add a click event listener to handle navigation
    document.addEventListener('click', function (event) {
        const target = event.target;

        // Check if the clicked element is an anchor tag
        if (target.tagName.toLowerCase() === 'a') {
            event.preventDefault();

            // Update the URL without reloading the page
            const href = target.getAttribute('href');
            window.history.pushState(null, null, href);

            // Update the content based on the new route
            updateContent();
        }
    });

    // Add a popstate event listener to handle browser back/forward buttons
    window.addEventListener('popstate', function () {
        // Update the content based on the new route
        updateContent();
    });
}

// Call the routing function to set up the initial routing behavior
handleRouting();
