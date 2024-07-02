document.addEventListener('DOMContentLoaded', function() {
    const branchContainer = document.getElementById('branchContainer');
    let branches = localStorage.getItem('branches');

    if (branches) {
        branches = JSON.parse(branches);
        branches.forEach((branch, index) => {
            const card = document.createElement('div');
            card.className = 'card';

            const nameElem = document.createElement('p');
            nameElem.textContent = `Nama Branch: ${branch.branchName}`;
            card.appendChild(nameElem);

            const locationElem = document.createElement('p');
            locationElem.textContent = `Lokasi Branch: ${branch.branchLocation}`;
            card.appendChild(locationElem);

            const openingTimeElem = document.createElement('p');
            openingTimeElem.textContent = `Waktu Buka: ${branch.openingTime}`;
            card.appendChild(openingTimeElem);

            const closingTimeElem = document.createElement('p');
            closingTimeElem.textContent = `Waktu Tutup: ${branch.closingTime}`;
            card.appendChild(closingTimeElem);

            const serviceElem = document.createElement('p');
            serviceElem.textContent = `Jenis Service: ${branch.serviceType}`;
            card.appendChild(serviceElem);

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.textContent = 'Hapus';
            deleteButton.addEventListener('click', function() {
                deleteBranch(index);
            });
            card.appendChild(deleteButton);

            branchContainer.appendChild(card);
        });
    }
});

document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'branch.html';
});

function deleteBranch(index) {
    let branches = localStorage.getItem('branches');
    if (branches) {
        branches = JSON.parse(branches);
        branches.splice(index, 1);
        localStorage.setItem('branches', JSON.stringify(branches));
        location.reload();
    }
}
