const form = document.querySelector("form");
const ticket = document.getElementById("ticket");

form.addEventListener("submit", function (event) {

    // Stop page from refreshing
    event.preventDefault();

    // Get values from form
    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const aadhaar = document.getElementById("aadhaar").value;
    const city = document.getElementById("city").value;
    const date = document.getElementById("date").value;
    const seat = document.getElementById("seat").value;

    // Get selected bus type
    const busType = document.querySelector(
        'input[name="busType"]:checked'
    );

    // Check whether bus type is selected
    if (!busType) {
        alert("Please select bus type");
        return;
    }

    // Set price
    let price;

    if (busType.value === "AC") {
        price = 2000;
    } else {
        price = 1000;
    }

    // Generate ticket number
    const ticketNumber = "BUS" + Math.floor(Math.random() * 100000);

    // Display ticket
    ticket.innerHTML = `
        <div class="ticket">

            <h2>🎫 Bus Ticket</h2>

            <hr>

            <p><strong>Ticket No:</strong> ${ticketNumber}</p>

            <p><strong>Passenger Name:</strong> ${username}</p>

            <p><strong>Age:</strong> ${age}</p>

            <p><strong>Aadhaar No:</strong> ${aadhaar}</p>

            <p><strong>City:</strong> ${city}</p>

            <p><strong>Travel Date:</strong> ${date}</p>

            <p><strong>Bus Type:</strong> ${busType.value}</p>

            <p><strong>Seat Number:</strong> ${seat}</p>

            <hr>

            <h3>Total Amount: ₹${price}</h3>

            <p>✅ Booking Confirmed</p>

        </div>
    `;
});