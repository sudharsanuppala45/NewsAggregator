document.addEventListener('DOMContentLoaded', function () {
    // Registration form validation and submission
    document.getElementById('registrationForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (name && email && password) {
            alert('Registration Successful!');
            // Simulate MongoDB insertion
            console.log(`User Registered: Name: ${name}, Email: ${email}`);
            // Reset form
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Login form validation and submission
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (email && password) {
            // Simulate MongoDB authentication
            console.log(`User Login: Email: ${email}`);
            alert('Login Successful!');
        } else {
            alert('Please enter your email and password.');
        }
    });

    // Simulated data for the dashboard
    const userData = [
        { name: 'John Doe', email: 'john@example.com', date: '2024-08-01' },
        { name: 'Jane Smith', email: 'jane@example.com', date: '2024-08-02' },
        { name: 'Alice Johnson', email: 'alice@example.com', date: '2024-08-03' }
    ];

    const userDataContainer = document.getElementById('userData');
    if (userDataContainer) {
        userData.forEach(user => {
            const row = `<tr><td>${user.name}</td><td>${user.email}</td><td>${user.date}</td></tr>`;
            userDataContainer.insertAdjacentHTML('beforeend', row);
        });
    }
});
function sucess(){
    alert("Fetching the login details!!");
}