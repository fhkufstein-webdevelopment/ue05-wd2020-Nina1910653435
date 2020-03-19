/*I tried to solve my homework but that doesn't work how i expected* i dont understand why
i would very grateful if you can tell me my mistakes */

$(document).ready(function() {

    var userListBody = $('.userList tbody');

    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {

        event.preventDefault(); /* notifies the user agent that if the event is not explicitly handled,
        The standard action should not be carried out as usual.
            The event continues as usual unless one of its event listeners calls stopPropagation () or stopImmediatePropagation (), both of which stop sharing immediately */

        event.stopPropagation(); /* event.stop Propagation prevents an event in the DOM tree from traveling up and triggering actions on other elements */

        if (this.checkValidity() === false) {
            // Returns true if an input element contains valid data
            $(this).addClass('was-validated');
            // Adds the class .was-validated to the .needs validation with the value-invalid
            return false;
        }

        //@todo
        //1. get values
        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)

        //your code follows here

        return false;
    });

    const users = document.getElementById("Username");
    const newUser = User.value;
    userListBody . push ( newUser ) ;      // new user belongs to the array
    const length = userListBody.length;    // Read the length of the array


    const table = document.getElementById("list-User");

    // Numbers indicate a position the row is new. Cell is drawn in
    const row = table.insertRow(-1);  // belongs to new row, value of -1: which causes the new one to be inserted at the last position
    const cell1 = row.insertCell(0);    // A value of 0 means that the new cell is inserted at the first position
    const cell2= row.insertCell(1);
    const cell3= row.insertCell(2);

    // The delete button should manage itself in the third cell
    cell1 . insideHTML  =  length ;          // Play length of the array
    cell2 . insideHTML  =  newUser ;          // new user experienced

    cell3 . insideHTML  =  <button type ="button" class =" btn btn-secondary btn-dangerouslySetInnerHTML deleteTrigger "title =" delete "><i class =" fa fa-trash "> </ i > </ button>

    document . getElementById ( "form" ) . reset ( ) ;
    return  false ;
} ) ;

    $('.deleteTrigger').click(function() {
        //@todo
        //1. remove current user from dom
        //2. update number of current users

        //your code follows here

        const table = document.getElementById("list_User");
        const index = document.getElementById("Position").value;
        let userListBody;
        const length = userListBody.Length;
        const row = table.deleteRow(Length);


    } ) ;

    //maybe some code follows here

} );
