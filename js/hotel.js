// test Object
var test = {
    frame: "yillian",
    lname: "zhang",
    age: 100,
    display: function(){
        console.log("in function");
        return this.fname + " " + this.lname;
    }
};
console.log(test.display());

// hotel reservation
var guestgroup = new Array();
$('#submit').click(reservation);
function reservation(){
    var guest={
        name: $('#guestname').val(),
        checkin: $('#checkin').val(),
        num: $('#num').val()
        //complete this

    };
    alert(guest.name + " Reserved a Room");
    guestgroup.push(guest);
    console.log(guestgroup);
}