// Handling AJAX form submission
export function formHandler(e) {
    e.preventDefault();
    const msg = document.getElementById('msg');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwCOBDpa5xt4eO2H0zXKn4KoeNovekNpJ6hLrEgRlhEhmEMzPW_kL8yjOJ0YzrUw1MsMA/exec';

    msg.innerHTML = "Sending...";
    let xhr = new XMLHttpRequest();
    xhr.open('POST', scriptURL);

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            msg.innerHTML = "Message sent successfully";
            setTimeout(() => msg.innerHTML = "", 5000);
            e.target.reset();
        } else {
            msg.innerHTML = "Error sending message";
            setTimeout(() => msg.innerHTML = "", 5000);
        }
    };

    xhr.onerror = () => {
        msg.innerHTML = "Error sending message";
        setTimeout(() => msg.innerHTML = "", 5000);
    };

    let formData = new FormData(e.target);
    xhr.send(formData);
}
