document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Customer logged in!');
    window.location.href = 'index.html';
    // Here you can add your logic to handle customer login
});

document.getElementById('adminForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const adminPassword = document.getElementById('adminPassword').value;
    if (adminPassword === 'Admin123') {
        alert('Admin logged in!');
        window.location.href = 'service.html';
        // Here you can add your logic to handle admin login
    } else {
        alert('Incorrect admin password!');
    }
});
