//console.log("kisanQueue started");



const registrationForm =
    document.getElementById("registrationForm");


if (registrationForm) {

    registrationForm.addEventListener(
        "submit",

        function(event) {

            event.preventDefault();


            const farmerData = {

                name:
                    document
                    .getElementById("name")
                    .value,

                mobile:
                    document
                    .getElementById("mobile")
                    .value,

                farmerId:
                    document
                    .getElementById("farmerId")
                    .value,

                village:
                    document
                    .getElementById("village")
                    .value,

                district:
                    document
                    .getElementById("district")
                    .value,

                crop:
                    document
                    .getElementById("crop")
                    .value,

                quantity:
                    document
                    .getElementById("quantity")
                    .value
            };


            localStorage.setItem(
                "farmerData",

                JSON.stringify(farmerData)
            );


            window.location.href =
                "centres.html";

        }

    );

}




//.js file for centres.html


const slotButtons =
    document.querySelectorAll(".slot-btn");

let selectedSlot = null;


slotButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        slotButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });


        button.classList.add("selected");


        selectedSlot = button.innerText;

    });

});




//.js file for centres.html


const confirmSlot =
    document.getElementById("confirmSlot");


if (confirmSlot) {

    confirmSlot.addEventListener(
        "click",

        function() {

            const bookingDate =
                document
                .getElementById("bookingDate")
                .value;


            if (
                !bookingDate ||
                !selectedSlot
            ) {

                alert(
                    "Please select date and time slot."
                );

                return;

            }


            const bookingData = {

                date:
                    bookingDate,

                slot:
                    selectedSlot

            };


            localStorage.setItem(
                "bookingData",

                JSON.stringify(bookingData)
            );


            window.location.href =
                "confirmation.html";

        }

    );

}










//.js file for confirmation.html


const savedBooking =
    localStorage.getItem("bookingData");


if (savedBooking) {

    const booking =
        JSON.parse(savedBooking);


    const displayDate =
        document.getElementById("displayDate");


    const displaySlot =
        document.getElementById("displaySlot");


    if (displayDate) {

        displayDate.innerText =
            booking.date;

    }


    if (displaySlot) {

        displaySlot.innerText =
            booking.slot;

    }

}



//.js file for centre buttons working


const centreButtons =
    document.querySelectorAll(".select-centre");


centreButtons.forEach(function(button) {

    button.addEventListener(
        "click",

        function() {

            window.location.href =
                "booking.html";

        }

    );

});





//admin login.js





const adminLoginForm =
    document.getElementById("adminLoginForm");


if (adminLoginForm) {

    adminLoginForm.addEventListener(
        "submit",

        function(event) {

            event.preventDefault();


            const username =
                document
                .getElementById("adminUsername")
                .value;


            const password =
                document
                .getElementById("adminPassword")
                .value;


            if (
                username === "admin" &&
                password === "1234"
            ) {

                localStorage.setItem(
                    "adminLoggedIn",
                    "true"
                );


                window.location.href =
                    "admin-dashboard.html";

            }

            else {

                alert(
                    "Invalid username or password"
                );

            }

        }

    );

}






//next token



const nextTokenBtn =
    document.getElementById(
        "nextTokenBtn"
    );


if (nextTokenBtn) {

    nextTokenBtn.addEventListener(
        "click",

        function() {


            const currentTokenElement =
                document.getElementById(
                    "adminCurrentToken"
                );


            let currentToken =
                currentTokenElement.innerText;


            let tokenNumber =
                parseInt(
                    currentToken.substring(1)
                );


            tokenNumber++;


            const newToken =
                "A" +
                tokenNumber
                    .toString()
                    .padStart(3, "0");


            currentTokenElement.innerText =
                newToken;


            localStorage.setItem(
                "currentToken",
                newToken
            );


            alert(
                "Queue updated! Now serving: "
                + newToken
            );

        }

    );

}





