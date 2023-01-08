function question1() {
    jelluy().renderPage(`
    <h1>This is a formation</h1>
    <img src="./imgs/question1.png">
    <p>Make TE2(Like python)</p>
    <input type="text" placeholder="code" id="code1">
    <button id="done">Done</button>
    <div id="result"></div>
    `,`
    `)
    done.addEventListener("click",function() {
        let value = code1.value;
        if (value == "te2 = true") {
            result.innerHTML = `
            <p>You did it!</p>
            <img src="./correctImgs/question1.png">
            `
        }
        else {
            alert("Incorrect (Use lowercase)")
        }
    })
}

jelluy().startSite(`
<h1>LoBall</h1>
<button onclick="question1()">Start</button>
`, ``)