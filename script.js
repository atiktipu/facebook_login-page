document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page refresh
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simple validation example
    if (email === '' || password === '') {
      alert('Please enter both email and password.');
    } else {
      alert(`Logged in as: ${email}`);
      // Here you could add code to send login data to a server
    }
  });
  