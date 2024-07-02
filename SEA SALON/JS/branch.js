document.getElementById('branchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const branchName = document.getElementById('branchName').value;
    const branchLocation = document.getElementById('branchLocation').value;
    const openingTime = document.getElementById('openingTime').value;
    const closingTime = document.getElementById('closingTime').value;
    const serviceType = document.getElementById('serviceType').value;

    const branch = { branchName, branchLocation, openingTime, closingTime, serviceType };

    let branches = localStorage.getItem('branches');
    if (branches) {
        branches = JSON.parse(branches);
    } else {
        branches = [];
    }
    branches.push(branch);
    localStorage.setItem('branches', JSON.stringify(branches));

    // Reset the form
    document.getElementById('branchForm').reset();

    alert('Branch berhasil ditambahkan!');

    // Redirect to branches page
    window.location.href = 'branches.html';
});

document.getElementById('viewBranchesButton').addEventListener('click', function() {
    window.location.href = 'branches.html';
});
