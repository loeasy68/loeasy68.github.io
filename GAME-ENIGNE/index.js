let name = prompt("Name of project:")
jelluy().startSite(`
<a class="waves-effect waves-light btn">Export ${name}</a>
`,`
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" /> 
<script defer src="https://pyscript.net/latest/pyscript.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
`)