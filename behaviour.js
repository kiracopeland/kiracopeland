//when an input field is focused, grab which specific field it is, grab it's corrisponding container, and change that container's bottom border to the signiture colour. When the user is no longer on this field, turn it back to normal.

//if input or textarea = focused, grab the container and change it's bottom border colour 

//^Once colour change is working, make the change an animation that moves from the left to right, and when unfocused, right to left?

//when user clicks on header links/project link, rather than jump, make the page auto scroll to that section

//make the header reflect where the user is - basically when the user is on the My Works section, make sure the My Works link is yellow

//create a space that blocks out the normal content and creates a space for showcasing works

//create a generalised google map and add it's styling

//when content in a text field is empty, make the error label visabile, and change spacing on input fields appropriatly

//function to set a new Google Map style
function initMap() {
    
    var styledMapTypeDay = new google.maps.StyledMapType(
        [
            //map styles go here
        ],
        {name: "custom"}
    );
   
    //create the parameters for a new Google Map and insert it into the webpage
    function initialize() {
        map = new google.maps.Map(document.getElementById("googleMap"), {
            center: {lat: -35.281959, lng: 149.128656},
            zoom: 15,
            disableDefaultUI: true,
            mapTypeControlOptions: {
                mapTypeId: ["custom"]
            }
        }
    )}
    //trigger the initialize function
    initialize();
};

//when an input field is focused, trigger an animation where the bottom border transitions from write to yellow, from left to right. This is to signify the user's currently selected field.
$('input').focus (function() {
    var currentSelection = this.parentElement;
    currentSelection.style.borderBottom = "solid 2px #e0d21e";
})

$('input').blur (function() {
    var currentSelection = this.parentElement;
    currentSelection.style.borderBottom = "solid 2px #ffffff";
})

//try and create a statement that will toggle between the two
$('textarea').focus (function() {
    var currentSelection = this.parentElement;
    currentSelection.style.borderBottom = "solid 2px #e0d21e";
})

$('textarea').blur (function() {
    var currentSelection = this.parentElement;
    currentSelection.style.borderBottom = "solid 2px #ffffff";
})


//When the user clicks send to submit, first perform a test where we test whether any field is empty (does this need to a converted to a string first/ the value stored in a variable first?). If it is, grab the test of the empty field, display it's empty field message and don't go ahead with the plan. 

//If all fields are full, check the email field to make sure it's a proper email. If it isn't, grab it's missing message and change it to an invalid email message (this message will need to be changed back to default once the user clicks send again, just in case it's empty the next time).

//If all validation is correct, perform the email, sending code