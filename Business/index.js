function prices() {
    jelluy().renderPage(`
    <h1>Prices</h1>
    <ol>
      <li>Beginner-5 months access Plus Previews</li>
        <ul>
          <li>$5 per week</li>
          <li>$20 per month</li>
          <li>$240 per year</li>
        </ul>
      <li>Medium-10 months access Plus Editor</li>
        <ul>
          <li>$10 per week</li>
          <li>$40 per month</li>
          <li>$480 per year</li>
        </ul>
      <li>Serious-Unlimited months access Plus Previews and Editor</li>
        <ul>
          <li>$20 per week</li>
          <li>$80 per month</li>
          <li>$960 per year</li>
        </ul>
    </ol>
    `,`
    
    `)
}
jelluy().startSite(`
<h1 style="text-align: center">Welcome LoganHTTPServices</h1>

<div>
  <h3>Prices</h3>
  <button onclick="prices()">Get the prices</button>
</div>
`,`

`)
