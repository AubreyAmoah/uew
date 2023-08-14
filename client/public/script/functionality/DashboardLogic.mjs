import { StudentPage } from "../componments/StudentPage.mjs";
import { InstructorPage } from "../componments/InstructorPage.mjs"
import { getBalance, startWork } from "./InstructorFunctionalities.mjs";

const dashboard = async() => {

    if (window.ethereum) {
        try {
          // Request account access if needed
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          // Get the selected address
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          const address = accounts[0];


            const headers = new Headers({
                "Content-Type": "application/json"
            });


            try {
                const response = await fetch(`http://localhost:3000/api/users/get/user/${address}`, {
                method: "GET",
                headers: headers,
                });

                const user = await response.json();
                if (response.ok) {
                    if (user.user.loggin_in_as === 'student'){
                        studentPage();
                    } else if (user.user.loggin_in_as === 'lecturer') {
                        lecturerPage();
                    }
                } else {
                    console.log(user);
                }
            } catch (error) {
                console.error(error);
            }
                } catch (error) {
                console.error(error);
                }
      } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
}

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

function lecturerPage() {
    InstructorPage();
    getBalance();
    startWork();

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

export {dashboard}