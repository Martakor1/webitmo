function formElemsToDto(formNode) {
    var data = {}
    Array.from(formNode.elements).filter((element) =>
        element.tagName == "INPUT" || element.tagName == "TEXTAREA"
    ).forEach((element) => {
        data[element.name] = element.value
    });
    if (data.name == "") data.name = "Аноним"
    data.dateTime = new Date()
    return data
}

function appendComment(commentDto) {
    var ul = document.querySelector(".comment-block ul");
    var commentHTML = `<li>
        <article>
            <address><a href="">${commentDto.name}</a></address>
            <p>${commentDto.text}</p>
            <footer>
                <time>${commentDto.dateTime.toLocaleDateString()}</time>
            </footer>
        </article>
    </li>`
    ul.insertAdjacentHTML("afterbegin", commentHTML)
}

var commentForm = document.querySelector("form")
commentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    appendComment(formElemsToDto(commentForm))
});



// document.getElementsByClassName("comment-form")[0].onsubmit(function(e) {
//     console.log("hi");
//     e.preventDefault();
//     alert("Отправка!");
// });
