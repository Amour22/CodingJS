
/*********************************************************************************************/
/*
/*                              	CODING-JS
/*
/*********************************************************************************************/

/*********************************************************************************************/
/*
/*                               COPYRIGHT 2022
/*           author:amour Dahou   Date de Création:21/04/2022      Version:1.0.1 
/8                            Dernière mise à jour:05/12/2022
/*
/*********************************************************************************************/


/*********************************************************************************************/
/*
/*                            Selectioner les elements du DOM
/*
/*********************************************************************************************/

/**
 * selectionner un element du DOM, diminutif de (querySelector)
 * @param {String} element  selector
 * @returns element where selector is 'param' 
 */
export let $ = param => document.querySelector(param);

/**
 * selectionner un ensemble d'elements du DOM, diminutif de (querySelectorAll)
 * @param {*} elements  selector
 * @returns all element wheres selector is 'params' - [nodeList]
 */
export let $$ = params => document.querySelectorAll(params);


/*********************************************************************************************/
/*
/*                            Boites de dialogue et affichages
/*
/*********************************************************************************************/

/**
 * afficher dans la console
 * @param {*} element1,elementN 
 */

export let $log = (param, ...params) => console.log(param, params);

/*********************************************************************************************/
/*
/*                            Gestions d'evenement
/*
/*********************************************************************************************/

/**
 * Ajouter un eventListener
 * @param {String} event 
 * @param {DOMElement} target 
 * @param {function} callback function 
 * @param {Booleen} booleen 
 * @returns 
 */
export let $event = (event,target,callback,booleen=true) => target.addEventListener(event,callback,booleen);

/*********************************************************************************************/
/*
/*                            Gestions d'attributs et class
/*
/*********************************************************************************************/

/**
 * Ajouter une class a un element du DOM
 * @param {DOMElement} target 
 * @param {class} a classname 
 * @returns 
 */
export let $toogleClass = (target,classname) => target.classList.toggle(classname);}
