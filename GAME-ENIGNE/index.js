const name = prompt("Name of project:");
function download() {
    let file = new File([`
    <!DOCTYPE html>
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
        <p>Not implemented</p>
    </html>
    `], 
    `${name}.html`,
    {
        type: "text/plain;charset=utf-8"
    });
    saveAs(file);
}
function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      return reader.result
    };
    reader.onerror = function (error) {
      return 'Error: ', error
    };
}
function base64Page() {
    jelluy().renderPage(`
    <h1>Convert file to base64</h1>
    <input id="file" type="file">
    <div id="result"></div>
    `,`
    
    `)
    file.addEventListener("change", function() {
        result.innerHTML = getBase64(file.value);
    }
}
jelluy().startSite(`
<div>
<a class="waves-effect waves-light btn" onclick="download()">Export ${name}</a>
</div>

<div class="box"></div>
`,`
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" /> 
<script defer src="https://pyscript.net/latest/pyscript.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js" integrity="sha512-Qlv6VSKh1gDKGoJbnyA5RMXYcvnpIqhO++MhIM2fStMcGT9i2T//tSwYFlcyoRRDcDZ+TYHpH8azBBCyhpSeqw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
`);