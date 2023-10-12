*** USER MANAGEMENT APPLICATION ***

This is an user management application where CRUD functionalities are used to handle the user information.


##  Importing Packages  <a id=section2></a>

To build the UI of this project bootstrap, rsuit react library, and react-icons/fa which is font awsome libraries are used.
Link1: https://react-bootstrap.netlify.app/getting-started/introduction, 
Link2: https://rsuitejs.com/
Link3: https://react-icons.github.io/react-icons

## UI Model and functionality<a id=section3></a>


###  Card Component <a id=section301></a>
In the beginning, to get the background color and to display table card component is used as a base.

### Table <a id=section302></a>
Table has used to display all the users and action buttons (Delete, Edit) section to apply action on particular data.

### Action buttons and methods <a id=section303></a>

On the edit function passes the particular column object and that is displayed in the form and accordingly update entry.
Similarly, on delete button click function call and get the id of that field and delete particular entry.

### Switch button and create user functions <a id=section304></a>

Switch toggle button is by deafult active which means we can easily create user but if toggle is deactivate create user button will disappear and new user can not be created.

### User create/edit form <a id=section305></a>

Initially created basic form which contain inputs, selectbox, number, dropdown fields. If you click on edit button on particular field, it will pop up same modal and show the details to update. Same form hadle conditionally to create and update form also change button text conditionally like submit and update.

### validation<a id=section306></a>

Required field on the name input: This will prevent the form from being submitted if the name input is empty.
Disable submit button if value is null in the field: This will disable the submit button if the name input is empty.
