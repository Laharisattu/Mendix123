// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Set focus to the element found with the selector, The element should be able to hold focus like a link, button, or input.
 * @param {string} targetSelector - Selector to reach the element to be scrolled to, example .mx-class or #widget-id
 * @returns {Promise.<void>}
 */
export async function SetFocus(targetSelector) {
	// BEGIN USER CODE
    const { isFocusable, focusFirst, setFocus } = require("./FocusHelper");
    const targetNode = targetSelector
        ? document.querySelector(targetSelector)
        : null;
    if (targetNode) {
        if (isFocusable(targetNode)) {
            setFocus(targetNode);
        }
        else {
            // If the target is not focusable, select the first focusable within
            focusFirst(targetNode);
        }
    }
    else {
        console.warn(`No DOM node found to set focus for query selector ${targetSelector}`);
    }
	// END USER CODE
}
