const name = prompt("Name of project:");
function download() {
    let blob = new Blob([`
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
    `], {
        type: "text/plain;charset=utf-8"
    });
    FileSaver.saveAs(blob, `${name}.html`);
}
jelluy().startSite(`
<a class="waves-effect waves-light btn" onclick="download()">Export ${name}</a>
`,`
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" /> 
<script defer src="https://pyscript.net/latest/pyscript.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js" integrity="sha512-Qlv6VSKh1gDKGoJbnyA5RMXYcvnpIqhO++MhIM2fStMcGT9i2T//tSwYFlcyoRRDcDZ+TYHpH8azBBCyhpSeqw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
`);