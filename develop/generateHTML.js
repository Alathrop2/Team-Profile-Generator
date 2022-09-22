// function to generate the HTML
function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile Builder</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="./assets/css/style.css" />
    </head>
    <body>
      <header class="header">My Team</header>
      <div class="card">
        <div id="Name" class="title bg-primary"></div>
        <div id="Position" class="position bg-primary"></div>
        <div class="ID"></div>
        <div class="email"></div>
        <div class="misc"></div>
      </div>
    </body>
  </html>`;
}

module.exports;
