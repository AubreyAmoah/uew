const startWork = async () => {
    const alert = document.getElementById('alert');
    const alertImg = document.getElementById('alert-image');
    const alertText = document.getElementById('alert-text');
    const overlaySetup = document.getElementById('overlay-setup');
    const firstName = document.getElementById('first_name');
    const lastName = document.getElementById('last_name');
    const saveSetup = document.getElementById('btn_save_setup');
    const getFname = document.getElementById('getfname');
    const myCoursesBtn = document.getElementById('my_courses_btn');
    const newCoursesBtn = document.getElementById('new_courses_btn');
    const myCoursesList = document.getElementById('my_courses_list');
    const newCoursesList = document.getElementById('new_courses_list');


    if (myCoursesBtn.classList.contains('select-active')) {
        myCoursesList.classList.remove('hide__all')
        newCoursesList.classList.add('hide__all')
    } else if ( newCoursesBtn.classList.contains('select-active')) {
        console.log('hello')
        myCoursesList.classList.add('hide__all')
        newCoursesList.classList.remove('hide__all')
    } else {
        console.log('hey')
        myCoursesList.classList.remove('hide__all')
        newCoursesList.classList.remove('hide__all')
    }

    myCoursesBtn.addEventListener('click', () => {
        if(!(myCoursesBtn.classList.contains('select-active'))){
            newCoursesBtn.classList.remove('select-active');
            myCoursesBtn.classList.add('select-active');


            //handle the course change again
            if (myCoursesBtn.classList.contains('select-active')) {
                myCoursesList.classList.remove('hide__all')
                newCoursesList.classList.add('hide__all')
            } else if ( newCoursesBtn.classList.contains('select-active')) {
                console.log('hello')
                myCoursesList.classList.add('hide__all')
                newCoursesList.classList.remove('hide__all')
            } else {
                console.log('hey')
                myCoursesList.classList.remove('hide__all')
                newCoursesList.classList.remove('hide__all')
            }
        }
    })

    newCoursesBtn.addEventListener('click', () => {
        if(!(newCoursesBtn.classList.contains('select-active'))){
            myCoursesBtn.classList.remove('select-active');
            newCoursesBtn.classList.add('select-active');

            //handle the course change again
            if (myCoursesBtn.classList.contains('select-active')) {
                myCoursesList.classList.remove('hide__all')
                newCoursesList.classList.add('hide__all')
            } else if ( newCoursesBtn.classList.contains('select-active')) {
                console.log('hello')
                myCoursesList.classList.add('hide__all')
                newCoursesList.classList.remove('hide__all')
            } else {
                console.log('hey')
                myCoursesList.classList.remove('hide__all')
                newCoursesList.classList.remove('hide__all')
            }
        }
    })


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
                    if (user.user.first_name == null || user.user.first_name == "" || user.user.last_name == null || user.user.last_name == ""){
                        overlaySetup.classList.remove('hide__all');



                        saveSetup.addEventListener('click', () => {

                            const first_name = firstName.value
                            const last_name = lastName.value
    
                            const data = {address: address, first_name, last_name}

                            console.log(data);
                            fetch("http://localhost:3000/api/users/update", {
                                method: "PATCH",
                                headers: headers,
                                body: JSON.stringify(data),
                              })
                                .then(response => {
                                  if (!response.ok) {
                                    throw new Error("Error Updating");
                                  }
                                  return response.json();
                              })
                                .then(result => {
                                    console.log(firstName.value)
                                    alert.classList.remove('hide__all');
                                    alertImg.src = '/assets/checked.png';
                                    alertText.textContent = `Update Succesful`;
                                    
                                    overlaySetup.classList.add('hide__all');
                                    setTimeout(() => {
                                        alert.classList.add('hide__all');
                                    }, 900);


                                    getFname.textContent = `${user.user.first_name}`;
                              })
                                .catch(error => {
                                  console.log(error);
                              });
                        })
                    } else {
                        getFname.textContent = `${user.user.first_name}`;
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

let getBalance = () => {
    const balance = document.getElementById('balance');
    // Check if Web3 is available
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    
        // Request account access if needed
        web3.currentProvider.enable().then(function(accounts) {
        const address = accounts[0];
    
        // Get the balance
        web3.eth.getBalance(address, function(error, balanceWei) {
            if (!error) {
            const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
            balance.textContent = balanceEther;
            // console.log(`Address: ${address}`);
            // console.log(`Balance: ${balanceEther} ETH`);
            } else {
            console.error(error);
            }
        });
        });
    } else {
        console.log('MetaMask not detected.');
    }
}

let getRecentCourses = async() => {
    const alert = document.getElementById('alert');
    const alertImg = document.getElementById('alert-image');
    const alertText = document.getElementById('alert-text');
    const overlaySetup = document.getElementById('overlay-setup');

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
            const response = await fetch(`http://localhost:3000/api/users/get/my/courses/${address}`, {
              method: "GET",
              headers: headers,
            });
    
            const user = await response.json();
            if (response.ok) {
                setTimeout(() => {

                }, 900);
            } else {
                setTimeout(() => {
                    
                }, 900);
            }
          } catch (error) {
            setTimeout(() => {

            }, 900);
            console.error(error);
        }
    } catch(err){
        console.log(err);
    }
}

let getMyCourses = async() => {
    const alert = document.getElementById('alert');
    const alertImg = document.getElementById('alert-image');
    const alertText = document.getElementById('alert-text');
    const overlaySetup = document.getElementById('overlay-setup');

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
            const response = await fetch(`http://localhost:3000/api/users/get/my/courses/${address}`, {
              method: "GET",
              headers: headers,
            });
    
            const user = await response.json();
            if (response.ok) {
                setTimeout(() => {

                }, 900);
            } else {
                setTimeout(() => {
                    
                }, 900);
            }
          } catch (error) {
            setTimeout(() => {

            }, 900);
            console.error(error);
        }
    } catch(err){
        console.log(err);
    }
}

const createCourse = async() => {
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
            const response = await fetch(``, {
                method: 'POST',
                headers: headers
            })

            const results = await response.json();
            if(response.ok) {

            }
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error);
    }
}



export {startWork, getBalance, getRecentCourses, getMyCourses}