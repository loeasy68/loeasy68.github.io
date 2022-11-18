function website() {
 jelluy.renderPage(`<h1>Docs</h1>`,``)
}
function startWeb() {
 jelluy.startSite(`
 <main class="bg-blua">
  <h1 class="text-3xl font-bold text-center text-white">
    Welcome to jelluy docs
  </h1>
  <button class="bg-sky-500 hover:bg-sky-700" onclick="website()">Start making a website</button>
 </main>
 `, `
 <script src="https://cdn.tailwindcss.com"></` + `script>
 <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#da373d',
            blua: '#155fa3',
            red: '#ff0000',
          },
          backgrounds: {
            blua: '#155fa3',
          }
        }
      }
    }
 </` + `script>
 `); 
}
startWeb();
