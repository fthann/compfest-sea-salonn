document.getElementById('serviceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceName = document.getElementById('serviceName').value;
    const sessionDuration = document.getElementById('sessionDuration').value;

    const service = { serviceName, sessionDuration };

    let services = localStorage.getItem('services');
    if (services) {
        services = JSON.parse(services);
    } else {
        services = [];
    }
    services.push(service);
    localStorage.setItem('services', JSON.stringify(services));

    addServiceToContainer(service);

    // Reset the form
    document.getElementById('serviceForm').reset();
});

document.addEventListener('DOMContentLoaded', function() {
    let services = localStorage.getItem('services');
    if (services) {
        services = JSON.parse(services);
        services.forEach((service, index) => {
            addServiceToContainer(service, index);
        });
    }
});

function addServiceToContainer(service, index) {
    const serviceContainer = document.getElementById('serviceContainer');

    const card = document.createElement('div');
    card.className = 'card';

    const nameElem = document.createElement('p');
    nameElem.textContent = `Nama Service: ${service.serviceName}`;
    card.appendChild(nameElem);

    const durationElem = document.createElement('p');
    durationElem.textContent = `Durasi per Sesi: ${service.sessionDuration} menit`;
    card.appendChild(durationElem);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Hapus';
    deleteButton.addEventListener('click', function() {
        deleteService(index);
    });
    card.appendChild(deleteButton);

    serviceContainer.appendChild(card);
}

function deleteService(index) {
    let services = localStorage.getItem('services');
    if (services) {
        services = JSON.parse(services);
        services.splice(index, 1);
        localStorage.setItem('services', JSON.stringify(services));
        location.reload();
    }
}
