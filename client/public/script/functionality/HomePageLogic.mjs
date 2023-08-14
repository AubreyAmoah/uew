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
        const lecturerLogin = document.getElementById('lecturer-login');

        studentLogin.addEventListener('click', async() => {
            if (typeof window.ethereum !== 'undefined') {

                console.log('MetaMask is installed!');

                const ethereum = window.ethereum;
                
                // Request account access
                ethereum.request({ method: 'eth_requestAccounts' })
                .then(accounts => {

                    const account = accounts[0];
                    const accType = 'student';
                    const headers = new Headers({
                        "Content-Type": "application/json"
                      });
                      //console.log(headers);
                      
                      const name = document.getElementById("profile-name");

                      const data = {address: account, loggedInType: accType}
                      
                      fetch("http://localhost:3000/api/users/login", {
                        method: "POST",
                        headers: headers,
                        body: JSON.stringify(data),
                      })
                        .then(response => {
                          if (!response.ok) {
                            throw new Error("Error Loggin in");
                          }
                          return response.json();
                      })
                        .then(user => {
                            console.log(user);
                            alert.classList.remove('hide__all');
                            alertImg.src = '/assets/checked.png';
                            alertText.textContent = `Connected to MetaMask with account: ${account}`;
                            setTimeout(() => {
                                alert.classList.add('hide__all');
                                window.location.reload();
                                window.location.href = '/dashboard'
                            }, 900);
                      })
                        .catch(error => {
                          console.log(error);
                          name.innerHTML = "Error getting name";
                      });
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



        lecturerLogin.addEventListener('click', async() => {
            if (typeof window.ethereum !== 'undefined') {

                console.log('MetaMask is installed!');

                const ethereum = window.ethereum;
                
                // Request account access
                ethereum.request({ method: 'eth_requestAccounts' })
                .then(accounts => {

                    const account = accounts[0];
                    const accType = 'lecturer';
                    const headers = new Headers({
                        "Content-Type": "application/json"
                      });
                      //console.log(headers);
                      
                      const name = document.getElementById("profile-name");

                      const data = {address: account, loggedInType: accType}
                      
                      fetch("http://localhost:3000/api/users/login", {
                        method: "POST",
                        headers: headers,
                        body: JSON.stringify(data),
                      })
                        .then(response => {
                          if (!response.ok) {
                            throw new Error("Error Loggin in");
                          }
                          return response.json();
                      })
                        .then(user => {
                            console.log(user);
                            alert.classList.remove('hide__all');
                            alertImg.src = '/assets/checked.png';
                            alertText.textContent = `Connected to MetaMask with account: ${account}`;
                            setTimeout(() => {
                                alert.classList.add('hide__all');
                                window.location.reload();
                                window.location.href = '/dashboard'
                            }, 900);
                      })
                        .catch(error => {
                          console.log(error);
                          name.innerHTML = "Error getting name";
                      });
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