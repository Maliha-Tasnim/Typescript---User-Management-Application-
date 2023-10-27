## USER MANAGEMENT APPLICATION <a id=section1></a>

This is a simple user management application where CRUD functionalities are used to handle the user information.


##  Importing Packages  <a id=section2></a>

To build the UI of this project, I used the following libraries:

⚫ Bootstrap
⚫ React Suite
⚫ React Icons/Font Awesome

## UI Model and functionality<a id=section3></a>


###  Card Component <a id=section301></a>

I used the Card component to provide a background color and to display the table.

### Table <a id=section302></a>

The table is used to display all of the users and action buttons (Delete, Edit) to allow users to perform actions on specific data.

### Action buttons and methods <a id=section303></a>

The edit function takes the specific column object as a parameter and displays it in the form, allowing the user to update the entry accordingly. Similarly, the delete button function takes the ID of the field as a parameter and deletes the specific entry.

### Switch button and create user functions <a id=section304></a>

The switch toggle button is active by default, which means that users can easily create new users. If the toggle is deactivated, the create user button will disappear and new users cannot be created.

### User create/edit form <a id=section305></a>

I created a basic form with inputs, select boxes, number fields, and dropdown fields. When the user clicks on the edit button for a particular field, the same modal will pop up and display the details for updating. The same form is used for both creating and updating users, with the button text changing conditionally to "Submit" or "Update".

### validation<a id=section306></a>

⚫ Required field on the name input: This prevents the form from being submitted if the name input is empty.
⚫ Disable submit button if value is null in the field: This disables the submit button if the name input is empty.
