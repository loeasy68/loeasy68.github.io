const name = prompt("Name of project:")
let codeValue = ""
function backPage() {
  jelluy().appsView(`
  <a id="exportGame" class="waves-effect waves-light btn">Export ${name}</a>
  <a id="addSprite" class="waves-effect waves-light btn">Add a sprite</a>
  <a id="code" class="waves-effect waves-light btn">Start coding</a>
  <div id="link"></div>
  `)
  addSprite.addEventListener("click", function(e) {
    e.preventDefault()
    addSpritePage()
  })
  exportGame.addEventListener("click", function(e){
      e.preventDefault()
      downloadGame()
  })
  code.addEventListener("click", function(e) {
    e.preventDefault()
    codePage()
  })
}
function downloadGame() {
  let file = new File([`
  <!DOCTYPE HTML>
  <html>
    <head>
    <style>
    body {
      display: flex;
    }
    .box{
      width: 700px;
      height: 700px;
      border: 1px solid black;
    }
    </style>
    <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" /> 
    <script defer src="https://pyscript.net/latest/pyscript.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.3.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js" integrity="sha512-Qlv6VSKh1gDKGoJbnyA5RMXYcvnpIqhO++MhIM2fStMcGT9i2T//tSwYFlcyoRRDcDZ+TYHpH8azBBCyhpSeqw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </head>
    <body>
      <div class="box">
        ${game.innerHTML}
      </div>
      <py-script>
        ${codeValue}
      </py-script>
    </body>
  </html>
  `], "game.html", {type: "text/plain;charset=utf-8"}) 
  saveAs(file)
}
let base64 = "";
function encodeImageFileAsURL(element) {
  let file = element.files[0];
  let reader = new FileReader();
  reader.onloadend = function() {
    base64 = reader.result;
  }
  reader.readAsDataURL(file);
}
function addSpritePage() {
  jelluy().appsView(`
  <input type="file"
       id="image"
       accept="image/png, image/jpeg">
  <input type="text" placeholder="Width" id="width">
  <input type="text" placeholder="Height" id="height">
  <input type="text" id="id" placeholder="id">
  
  <a id="done" class="waves-effect waves-light btn">Done</a>
  <a id="back" class="waves-effect waves-light btn">Back</a>
  `)
  back.addEventListener("click", function(e) {
    e.preventDefault()
    backPage()
  })
  image.addEventListener("change", function() {
    encodeImageFileAsURL(image)
  })
  done.addEventListener("click", function(e) {
    e.preventDefault(); 
    game.innerHTML = game.innerHTML + `<img id="${id.value}" src="${base64}" width="${width.value}" height="${height.value}">`;
  })
}
function codePage() {
  jelluy().appsView(`
  <textarea id="python" rows="30" cols="30"></textarea>
  <a id="run" class="waves-effect waves-light btn">Run</a>
  <a id="done" class="waves-effect waves-light btn">Save</a>
  <a id="back" class="waves-effect waves-light btn">Back</a>
  <div id="result"></div>
  `)
  back.addEventListener("click", function(e) {
    e.preventDefault()
    backPage()
  })
  done.addEventListener("click", function(e) {
    e.preventDefault()
    codeValue = python.value
  })
  run.addEventListener("click", function(e) {
    e.preventDefault()
    result.innerHTML = `
    <py-script>
      ${codeValue}
    </py-script>
    `
  })
}
jelluy().startSite(`
<div id="options">
<a id="exportGame" class="waves-effect waves-light btn">Export ${name}</a>
<a id="addSprite" class="waves-effect waves-light btn">Add a sprite</a>
<a id="code" class="waves-effect waves-light btn">Start coding</a>
<div id="link"></div>
</div>

<div id="game" class="box"></div>
`,`

`)

addSprite.addEventListener("click", function(e) {
  e.preventDefault()
  addSpritePage()
})
exportGame.addEventListener("click", function(e){
  e.preventDefault()
  downloadGame()
})
code.addEventListener("click", function(e) {
  e.preventDefault()
  codePage()
})