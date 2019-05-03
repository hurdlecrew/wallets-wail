// ==UserScript==
// @name         Nena Shopper
// @namespace    Waterwood
// @version      0.1
// @description  Buy a bag
// @match        https://www.nenaandco.com/*
// @require      https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js
// @grant        none
// ==/UserScript==

var addtocart = document.getElementById("AddToCart");
if (addtocart)  {
    var addtocartform = document.getElementById("AddToCartForm");
    addtocartform.submit()
}

var checkout = document.getElementsByName("checkout");
if (checkout && String(document.location).startsWith("https://www.nenaandco.com/cart")) {
    window.location.href = "https://www.nenaandco.com/14259574/checkouts/4b57e145c25f928824dfe7b7b29effc9?_ga=2.58178346.1650017560.1556678312-2025905925.1550265543";
}
