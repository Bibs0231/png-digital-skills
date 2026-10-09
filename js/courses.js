
/* A4 Feature 1: Interactive course search and filter */

document.addEventListener("DOMContentLoaded", function () {

    // Find the search interface
    const filterPanel = document.getElementById("course-filter");
    const searchInput = document.getElementById("course-search");
    const resetButton = document.getElementById("reset-course-search");
    const statusMessage = document.getElementById("course-search-status");

    // Find the existing course articles
    const courseCards = Array.from(
        document.querySelectorAll(".course-topics > article")
    );

    // Stop if required elements are missing
    if (!filterPanel || !searchInput || !resetButton ||
        !statusMessage || courseCards.length === 0) {
        return;
    }

    // Filter course cards using the entered keyword
    function filterCourses() {

        const keyword = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        courseCards.forEach(function (card) {

            const courseText = card.textContent.toLowerCase();
            const isMatch = courseText.includes(keyword);

            // Hide courses that do not match
            card.hidden = !isMatch;

            if (isMatch) {
                visibleCount++;
            }
        });

        // Display useful search feedback
        if (keyword === "") {

            statusMessage.textContent =
                "Showing all " + courseCards.length + " courses.";

        } else if (visibleCount === 0) {

            statusMessage.textContent =
                "No courses match your search. Try another keyword.";

        } else {

            statusMessage.textContent =
                "Showing " + visibleCount + " of " +
                courseCards.length + " courses.";
        }
    }

    // Filter whenever the user types
    searchInput.addEventListener("input", filterCourses);

    // Reset search and show every course
    resetButton.addEventListener("click", function () {

        searchInput.value = "";
        filterCourses();
        searchInput.focus();
    });

    // Show controls only after JavaScript is ready
    filterPanel.hidden = false;

    // Set the initial result count
    filterCourses();

});
