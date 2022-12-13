function prices() {
    jelluy().renderPage(`
    <h1>Prices</h1>
    <ol>
      <li>Beginner-5 months access Plus Previews</li>
      <li>
        <ul>
          <li>$5 per week</li>
          <li>$20 per month</li>
          <li>$240 per year</li>
        </ul>
      </li>
      <li>Medium-10 months access Plus Editor</li>
      <li>
        <ul>
          <li>$10 per week</li>
          <li>$40 per month</li>
          <li>$480 per year</li>
        </ul>
      </li>
      <li>Serious-Unlimited months access Plus Previews and Editor</li>
      <li>
        <ul>
          <li>$20 per week</li>
          <li>$80 per month</li>
          <li>$960 per year</li>
        </ul>
      </li>
    </ol>
    `,`
    
    `)
}
jelluy().startSite(`
<h1>Welcome LoganHTTPServices</h1>
<button onclick="prices()">Prices</button>
`,`

`)