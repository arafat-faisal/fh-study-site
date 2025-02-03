function toggleCollapse(clickedElement) {
    // Check if it's a sub-box or main box
    if (clickedElement.classList.contains("sub-box")) {
        clickedElement.classList.toggle("active");
    } else {
        clickedElement.classList.toggle("active");

        // Ensure sub-boxes remain collapsed when main box expands
        let subBoxes = clickedElement.querySelectorAll(".sub-box");
        subBoxes.forEach(subBox => subBox.classList.remove("active"));
    }
}
