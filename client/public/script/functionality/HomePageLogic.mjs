import { HomePage } from '../componments/HomePage.mjs'

function homePage() {
        HomePage();

        const loginBtn = document.getElementById('login-btn');
        const overlay = document.getElementById('overlay');
        const alert = document.getElementById('alert');
        const alertImg = document.getElementById('alert-image');
        const alertText = document.getElementById('alert-text');

        loginBtn.addEventListener('click', () => {
            overlay.classList.remove('hide__all')
        })

        const overlayClose = document.getElementById('overlay-close');

        overlayClose.addEventListener('click', () => {
            overlay.classList.add('hide__all');
        })

        const studentLogin = document.getElementById('student-login');

        studentLogin.addEventListener('click', async() => {
            if (typeof window.ethereum !== 'undefined') {

                console.log('MetaMask is installed!');

                const ethereum = window.ethereum;
                
                // Request account access
                ethereum.request({ method: 'eth_requestAccounts' })
                .then(accounts => {
                    const account = accounts[0];
                    alert.classList.remove('hide__all');
                    alertImg.src = '/assets/checked.png';
                    alertText.textContent = `Connected to MetaMask with account: ${account}`;
                    setTimeout(() => {
                        alert.classList.add('hide__all');
                        window.location.reload();
                        window.location.href = '/student'
                    }, 900);
                })
                .catch(error => {
                    console.error('Error connecting to MetaMask:', error);
                });
                

                // window.ethereum.on('accountsChanged', (accounts) => {
                //     console.log('MetaMask account changed:', accounts[0]);
                // });

                // const chainId = await window.ethereum.request({ method: 'eth_chainId' });

                // window.ethereum.on('chainChanged', handleChainChanged);

                // function handleChainChanged(chainId) {
                // // We recommend reloading the page, unless you must do otherwise.
                // window.location.reload();
                // }
            } else {

            }
        })
}

export{homePage}