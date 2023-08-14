const startWork = async () => {
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
                    if (user.user.first_name === '' || user.user.last_name === ''){
                        
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