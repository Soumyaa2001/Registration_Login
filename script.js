document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('Password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        alert('Passwords match. You are loging in...');
        this.submit(); 
    } else {
        alert('Passwords do not match. Please try again.');
    }
});
