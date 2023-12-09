window.addEventListener("load", () => {
    var loadTime = window.performance.getEntriesByType('navigation')[0].loadEventStart;
    var textNode = document.createElement("p");
    textNode.style.color = "white";
    textNode.style.display = "block";
    textNode.appendChild(document.createTextNode(loadTime + "мс - Время загрузки страницы"));
    document.getElementsByClassName("site-footer")[0]
    .appendChild(textNode);
});