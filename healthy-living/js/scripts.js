The JavaScript code provided covers the requested functionality for a Fitness and Wellness portfolio website:

1. **Smooth Scroll**:
   - Selects all elements with the class 'scroll-link'
   - Adds a click event listener to each link
   - When clicked, the function prevents the default link behavior
   - Finds the target element based on the link's 'href' attribute
   - Scrolls to the target element's position using smooth scrolling

2. **Form Validation**:
   - Selects the contact form element
   - Adds a submit event listener to the form
   - Retrieves the values of the name, email, and message input fields
   - Checks if any of the fields are empty
   - If any field is empty, the function prevents the form submission and displays an alert

3. **Interactive Project Filters**:
   - Selects all elements with the class 'filter-btn'
   - Selects all elements with the class 'project'
   - Adds a click event listener to each filter button
   - Retrieves the 'data-category' attribute of the clicked button
   - Loops through all project elements
   - If the project element has the same category as the clicked button or the category is 'all', the project is displayed
   - Otherwise, the project is hidden

This JavaScript code is tailored to the Fitness and Wellness portfolio niche and should work seamlessly on both desktop and mobile devices.