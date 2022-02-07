const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
async function chercherClients() {
    try {
    const response = await fetch('https://formation-angular-collegues.herokuapp.com/api/v1/collegues')
    if (!response.ok) {
        throw new Error(`Erreur HTTP ! statut : ${response.status}`);
      }
      const clients = response.json()
      return await clients;
    }
      catch(e) {
        console.log(e);
      }
}



exports.chercherClients = chercherClients;



