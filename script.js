const formLogin = document.getElementById('form-login');

function sendForm(event){
    event.preventDefault();

    const formData = new FormData(formLogin);
    const data = {
        username: formData.get('usuario'),
        password: formData.get('password'),
    };


    fetch('./php/login.php',{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
        },
    })
    .then((raw) => raw.json())
    .then((response) => {
        if (response.success==false){
            alert(response.message);
        }
        else{
            location.href='admin.html';
        }
    });
}

formLogin.addEventListener('submit', sendForm);
