document.addEventListener('DOMContentLoaded', function() {
    const historyContainer = document.getElementById('reservationHistory');
    let reservations = localStorage.getItem('reservations');

    if (reservations) {
        reservations = JSON.parse(reservations);
        reservations.forEach((reservation, index) => {
            const card = document.createElement('div');
            card.className = 'card';

            const nameElem = document.createElement('p');
            nameElem.textContent = `Nama: ${reservation.name}`;
            card.appendChild(nameElem);

            const phoneElem = document.createElement('p');
            phoneElem.textContent = `Nomor Telepon: ${reservation.phone}`;
            card.appendChild(phoneElem);

            const serviceElem = document.createElement('p');
            serviceElem.textContent = `Tipe Service: ${reservation.service}`;
            card.appendChild(serviceElem);

            const datetimeElem = document.createElement('p');
            datetimeElem.textContent = `Tanggal dan Waktu: ${reservation.datetime}`;
            card.appendChild(datetimeElem);

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.textContent = 'Hapus';
            deleteButton.addEventListener('click', function() {
                deleteReservation(index);
            });
            card.appendChild(deleteButton);

            historyContainer.appendChild(card);
        });
    }
});

document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function deleteReservation(index) {
    let reservations = localStorage.getItem('reservations');
    if (reservations) {
        reservations = JSON.parse(reservations);
        reservations.splice(index, 1);
        localStorage.setItem('reservations', JSON.stringify(reservations));
        location.reload();
    }
}
