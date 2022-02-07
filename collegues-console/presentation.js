
const readline = require('readline');
const liste = require('./service');
const { stdin: input, stdout: output } = require('process');


class Presentation {
    constructor() {
        this.menu = ['1. Lister les collègues','2. Créer un collègue','3. Créer un vote','4. Afficher le classement'];

    }
    
     demarrer() {
        const rl = readline.createInterface({ input, output });
        rl.question(this.menu.forEach(rep=>console.log(rep)), (answer) => {
            switch (answer) {
                case "1":
                    console.log(">> Liste des clients");
                    liste.chercherClients().then(resp => resp.map((client,i)=> console.log(i, "Nom: " + client.nom + " Prénom: " + client.prenom)));
                    this.demarrer();
                    break;
                case "2":
                    let objetClient = {};
                    rl.question("le nom du client ? ", (asw) =>{
                        objetClient = {"nom":asw}
                        if(objetClient.nom != null){
                            rl.question("le prénom du client ? ", (asw) =>{
                                objetClient = {"prenom": asw}
                                console.log(objetClient)
                                if(objetClient.prenom != null){
                                    rl.question("le pseudo du client ? ", (asw) =>{
                                        arr.push(asw)
                                        if(arr[2] != null){
                                            rl.question("la photo du client ? ", (asw) =>{
                                                arr.push(asw)
                                                if(arr[2] != null){
                                                    rl.question("le score du client ? ", (asw) =>{
                                                        arr.push(asw)
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })

                    break;
                case "99":
                    rl.close();
                    break;
                default:
                    break;
            }
        });
    }
}


const presentation = new Presentation();

exports.Demarrer = Presentation;
