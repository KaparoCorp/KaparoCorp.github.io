// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// map form show
if (document.querySelector("#showMap")) {
    document.querySelector("#showMap").addEventListener("click", function (e) {
        e.preventDefault();
        $(".map_form_container").addClass("map_show");
        document.querySelector(".contact_heading").innerText = "Location";
    });
}
if (document.querySelector("#showForm")) {
    document.querySelector("#showForm").addEventListener("click", function (e) {
        e.preventDefault();
        $(".map_form_container").removeClass("map_show");
        document.querySelector(".contact_heading").innerText = "Contact Us";
    });
}

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

