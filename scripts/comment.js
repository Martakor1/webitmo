function formElemsToDto(formNode) {
    // извлекаем пары name: value из input и textarea формы.
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

var commentForm = document.querySelector(".comment-form")
commentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    appendComment(formElemsToDto(commentForm))
});


//network code//
commentLoader = document.querySelector(".comment-block .lightsaber-loader")
commentErrorBlock = document.querySelector(".comment-block .load-error-block")

function loaderToggle(flag) {
    if (flag) {
        commentLoader.style.display = "block"
    }
    else {
        commentLoader.style.display = "none"
    }
}

function showError(message) {
    commentErrorBlock.innerHTML = '';
    commentErrorBlock.insertAdjacentHTML("afterbegin", `<p>⚠ При загрузке комментариев что-то пошло не так: ${message}</p>`)
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function fetchComments() {
    var response
    try {
        response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${getRandomInt(100)}`);
        if (!response.ok) {
            throw new Error(`ответ сервера: ${response.status}`)
        }
    } catch (error) {
        showError(error)
        return
    } finally {
        loaderToggle(false);
    }
    jsonResp = await response.json()
    jsonResp.forEach(element => {
        appendComment({name: element.email, text: element.body, dateTime: new Date()})
    });
}

fetchComments()