function copyEmail() {
    // console.log('copyEmail function called');
    const email = 'sthapa.simana@gmail.com';
    navigator.clipboard.writeText(email)
        .then(() => {
            showCopyMessage();
        })
        .catch((err) => {
            console.error('Unable to copy email: ', err);
        });
}

function showCopyMessage() {
    const copyMessage = document.createElement('div');
    copyMessage.textContent = 'Email copied! Can\'t wait to hear from you';
    copyMessage.classList.add('copy-message');

    document.body.appendChild(copyMessage);

    setTimeout(() => {
        copyMessage.remove();
    }, 7000);
}

function openEmailApp() {
    const email = 'sthapa.simana@gmail.com';
    const mailtoLink = `mailto:${email}`;

    window.location.href = mailtoLink;
}




