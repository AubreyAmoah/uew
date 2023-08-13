import { StudentPage } from "../componments/StudentPage.mjs";

function studentPage () {
    StudentPage();

    const alert = document.getElementById('alert');
    const alertImg = document.getElementById('alert-image');
    const alertText = document.getElementById('alert-text');

    window.ethereum.on('accountsChanged', (accounts) => {
        alert.classList.remove('hide__all');
        alertImg.src = '/assets/checked.png';
        alertText.textContent = `MetaMask account changed:`;
        console.log('clicked')
        setTimeout(() => {
            alert.classList.add('hide__all');
            window.location.reload();
            window.location.href = '/'
        }, 900);
    });
}

export {studentPage}