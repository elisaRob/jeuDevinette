'use strict';

const elInput=document.getElementById("mettreVotreNombre");
const elBoutonVerifier=document.getElementById("boutonVerif");
const elPargrapheVerification=document.getElementById("texteVerificationNombre");
let compteur=0;
// let compteurGenererLeNombre=1;
const rejouer=document.getElementById("rejouer");
const form=document.querySelector("form");
const niveauFacile=document.querySelector(".niveauFacile");
const niveauDifficile=document.querySelector(".niveauDifficile");
const niveauMoyen=document.querySelector(".niveauMoyen")
// let recuperationNombreAleatoire;
const vosNombres=document.querySelector(".vosNombres");
// let nombreOnze='11';
// let nombreCinquante='50';
// let nombreCent='100'
let recuperationNombreAleatoire;
const eltropHautOuBas=document.getElementById("tropHautOuBas");
const elCombienDeTentative=document.getElementById('combienDeTentative');
const nouvelleDivZoneHistorique=document.createElement('div');

function genererLeNombre(nombre){
 
    let nombreAleatoire=Math.floor(Math.random()* Number(nombre));
   
    return nombreAleatoire;
    
}

niveauFacile.addEventListener("click",(e)=>{
    e.preventDefault();

    eltropHautOuBas.textContent='';
    elCombienDeTentative.textContent='';
    elPargrapheVerification.textContent="";
    elInput.value=""
    form.classList.remove('formGagner')
    elPargrapheVerification.classList.remove('texteVerificationNombreGagner')
    
    compteur=0;

    niveauFacile.classList.add('activeNiveau')
    niveauMoyen.classList.remove('activeNiveau')
    niveauDifficile.classList.remove('activeNiveau')
    
 

    classeActiveOuPas();
    genererLeNombre('11')
    // genererLeNombreFacile();
    recuperationNombreAleatoire=genererLeNombre('11');
    
})

niveauMoyen.addEventListener("click",(e)=>{
    e.preventDefault();

    eltropHautOuBas.textContent='';
    elCombienDeTentative.textContent='';
    elPargrapheVerification.textContent="";
    elInput.value="";
    form.classList.remove('formGagner')
    elPargrapheVerification.classList.remove('texteVerificationNombreGagner')

    compteur=0;

    niveauMoyen.classList.add('activeNiveau')
    niveauFacile.classList.remove('activeNiveau')
    niveauDifficile.classList.remove('activeNiveau')
    

    classeActiveOuPas();
    genererLeNombre('50')
    // genererLeNombreMoyen();
    recuperationNombreAleatoire=genererLeNombre('50');
    

})

niveauDifficile.addEventListener("click",(e)=>{
    e.preventDefault();

    eltropHautOuBas.textContent='';
    elCombienDeTentative.textContent='';
    elPargrapheVerification.textContent="";
    elInput.value="";
    form.classList.remove('formGagner')
    elPargrapheVerification.classList.remove('texteVerificationNombreGagner')
    
    compteur=0;

    niveauDifficile.classList.add('activeNiveau')
    niveauMoyen.classList.remove('activeNiveau')
    niveauFacile.classList.remove('activeNiveau')
    

    classeActiveOuPas();
    genererLeNombre('100')
    // genererLeNombreDifficile();
    recuperationNombreAleatoire=genererLeNombre('100');
    
})

function classeActiveOuPas(){
    vosNombres.classList.remove("vosNombres")
    vosNombres.classList.add("vosNombresActive");
}


elBoutonVerifier.addEventListener('click',(e)=>{
    e.preventDefault();
    verifierEgalite();
   
})

rejouer.addEventListener('click',()=>{
    recuperationNombreAleatoire=genererLeNombre();
   
})




// let recuperationNombreAleatoire=genererLeNombre();



function verifierEgalite(){
    compteur++;
    if((Number(elInput.value)===Number(recuperationNombreAleatoire)) && compteur< 5){
       elPargrapheVerification.textContent="Bravo"
       genererLeNombre();
    //    effacer('nouvelElement');
    //    effacer('autreNouvelElement');
       eltropHautOuBas.textContent='';
       elCombienDeTentative.textContent='';
       rajoutClasseGagner();

    }else if(!(Number(elInput.value)===Number(recuperationNombreAleatoire)) && compteur <5){
     
        elPargrapheVerification.textContent="Perdu"
        verifierTropHautEtTropBas();
        // effacer('autreNouvelElement')
        elCombienDeTentative.textContent='';
        decompte(compteur);
        zoneHistorique();
    }else{
        elPargrapheVerification.textContent="Vous avez perdu j'ai réinitialiser";
        genererLeNombre();
        eltropHautOuBas.textContent='';
        elCombienDeTentative.textContent='';
    
        // effacer('nouvelElement');
        // effacer('autreNouvelElement')
    }
}

function verifierTropHautEtTropBas(){
    if(Number(elInput.value) < Number(recuperationNombreAleatoire)){
        // creerElement('bas')
        eltropHautOuBas.textContent='Vous êtes trop bas'
    }else{
        // creerElement('haut') 
        eltropHautOuBas.textContent='Vous êtes trop haut'
    }
}

function creerElement(basOuHaut){
    const creationDiv=document.createElement("div");
    const contenuDiv=document.createTextNode(`Vous êtes trop ${basOuHaut}`);
    creationDiv.appendChild(contenuDiv);
    form.appendChild(creationDiv);
    creationDiv.className="nouvelElement"

}

function effacer(quelElement){
    const recupererNouvelElement=document.querySelectorAll(`.${quelElement}`);
    recupererNouvelElement.forEach((element)=>{
        // element.style.display="none";
        element.remove();
    })
}

function decompte(compteur){

    let resultat=5-compteur;
    elCombienDeTentative.textContent=`Il vous reste ${resultat} tentatives`;
    // const creationAutreDiv=document.createElement('div');
    // const creationContenu=document.createTextNode(`Il vous reste ${resultat} tentatives`);
    // creationAutreDiv.appendChild(creationContenu);
    // form.appendChild(creationAutreDiv);
    // creationAutreDiv.className='autreNouvelElement'
}

function zoneHistorique(){
   
    const contenuNouvelleZoneHistorique=document.createTextNode(elInput.value+' ');
    nouvelleDivZoneHistorique.appendChild(contenuNouvelleZoneHistorique);
    form.appendChild(nouvelleDivZoneHistorique);
    nouvelleDivZoneHistorique.id="nouvelleZoneHistorique";
    nouvelleDivZoneHistorique.style.position="absolute";
    nouvelleDivZoneHistorique.style.top="95%"

}

function effacerZoneHistorique(){
    const recupererZoneHistorique=document.getElementById('nouvelleZoneHistorique');
    recupererZoneHistorique.remove();

}

function rajoutClasseGagner(){
    form.classList.add('formGagner')
    elPargrapheVerification.classList.add('texteVerificationNombreGagner')
}

