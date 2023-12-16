function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform actual login validation (add your authentication logic here)
    if (username === '1234' && password === '1234') {
        alert('Login successful! Redirecting to the dashboard...');
        // Redirect to the dashboard page
        window.location.href = 'admin2.html'; // Replace 'dashboard.html' with the actual page you want to redirect to
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
