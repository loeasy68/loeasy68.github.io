const name = prompt("Name of project:")
function downloadGame() {
  let file = new File([`
  <!DOCTYPE HTML>
  <html>
    <head>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" /> 
    <script defer src="https://pyscript.net/latest/pyscript.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.3.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js" integrity="sha512-Qlv6VSKh1gDKGoJbnyA5RMXYcvnpIqhO++MhIM2fStMcGT9i2T//tSwYFlcyoRRDcDZ+TYHpH8azBBCyhpSeqw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </head>
    <body>
      Not implemented
    </body>
  </html>
  `], "game.html", {type: "text/plain;charset=utf-8"}) 
  saveAs(file)
}
function backgroundPage() {
  jelluy().appsView(`
  <input type="file"
       id="image"
       accept="image/png, image/jpeg">
  `)
  image.addEventListener("change", function() {
    game.style.backgroundImage = image.value;
  })
}
jelluy().startSite(`
<div id="options">
<a id="exportGame" class="waves-effect waves-light btn">Export ${name}</a>
<a id="background" class="waves-effect waves-light btn">Set a background image</a>
<div id="link"></div>
</div>

<div id="game" class="box"></div>
`,`
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" /> 
<script defer src="https://pyscript.net/latest/pyscript.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
`)
background.addEventListener("click", function(e) {
  e.preventDefault()
  backgroundPage()
})
exportGame.addEventListener("click", function(e){
    e.preventDefault()
    downloadGame()
})