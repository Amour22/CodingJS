
/*********************************************************************************************/
/*
/*                              CODING-PLUS FRAMEWORK
/*
/*********************************************************************************************/

/*********************************************************************************************/
/*
/*                               COPYRIGHT 2022
/*           Créateur:amour Dahou   Date de Création:21/04/2022      Version:1.0 
/8                            Dernière mise à jour:21/04/2022
/*
/*********************************************************************************************/


/*********************************************************************************************/
/*
/*                            Selectioner les elements du DOM
/*
/*********************************************************************************************/

/**
 * selectionner un element du DOM, diminutif de (querySelector)
 * @param {*} element  selector
 * @returns element where selector is 'element' 
 */
function $(element){return document.querySelector(element);}

/**
 * selectionner un ensemble d'elements du DOM, diminutif de (querySelectorAll)
 * @param {*} elements  selector
 * @returns all element wheres selector is 'elements' 
 */
function $$(elements){return document.querySelectorAll(elements);}


/*********************************************************************************************/
/*
/*                            Boites de dialogue et affichages
/*
/*********************************************************************************************/

/**
 * afficher dans la console
 * @param {*} element 
 */

function logg(element){ console.log(element);}

/*********************************************************************************************/
/*
/*                            Gestions d'evenement
/*
/*********************************************************************************************/

/**
 * Ajouter un eventListener
 * @param {*} event 
 * @param {*} element 
 * @param {*} function 
 * @param {*} booleen 
 * @returns 
 */
function event(event,element,newFunction,booleen=true){return element.addEventListener(event,newFunction,booleen);}

/*********************************************************************************************/
/*
/*                            Gestions d'attributs et class
/*
/*********************************************************************************************/

/**
 * Ajouter une class a un element du DOM
 * @param {element} element 
 * @param {class} newClass 
 * @returns 
 */
function toogleClass(el,newClass){return el.classList.toggle(newClass);}

	
/*********************************************************************************************/
/*
/*                            EXPORTATION DU FRAMEWORK
/*
/*********************************************************************************************/

//exportons le framework
export{$,$$,logg,event,toogleClass}
