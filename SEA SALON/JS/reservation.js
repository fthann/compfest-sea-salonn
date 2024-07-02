document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const datetime = document.getElementById('datetime').value;

    const reservation = { name, phone, service, datetime };

    let reservations = localStorage.getItem('reservations');
    if (reservations) {
        reservations = JSON.parse(reservations);
    } else {
        reservations = [];
    }
    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));

    alert(`Reservasi berhasil!\nNama: ${name}\nNomor Telepon: ${phone}\nTipe Service: ${service}\nTanggal dan Waktu: ${datetime}`);

    // Reset the form
    document.getElementById('reservationForm').reset();
});

document.getElementById('historyButton').addEventListener('click', function() {
    window.location.href = 'history.html';
});
