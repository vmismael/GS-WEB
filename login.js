function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password != confirmPassword) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        return false;
    }
    return true;
}

function togglePasswordVisibility(id) {
    var passwordField = document.getElementById(id);
    var eyeIcon = document.getElementById(id + '-eye');
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

function handleCadastro(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const cpf = document.getElementById('cpf').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
    }

    const user = {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
}

function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && username === storedUser.email && password === storedUser.senha) {
        window.location.href = encodeURIComponent('index.html');
    } else {
        alert('Login incorreto. Por favor, tente novamente.');
    }
}
