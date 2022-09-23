// function to generate the HTML
function generateHTML(data) {
  const teamMember = createMember(data);
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
      ${teamMember}
    </body>
  </html>`;
}

createMember = (data) => {
  let memeberData = '';
  data.forEach((i) => {
    if ('ManagerName' in i) {
      memeberData += `<div class="card">
     <div id="Name" class="title bg-primary">${i.ManagerName}</div>
     <div id="Position" class="position bg-primary">Manager</div>
     <div class="ID">${i.ID}</div>
     <div class="email">${i.Email}</div>
     <div class="misc">${i.OfficeNumber}</div>
  </div>`;
    } else if ('EngineerName' in i) {
      console.log('hello');
    } else if ('InternName' in i) {
      console.log('hello');
    }
  });
  // const memeberData = `<div class="card">
  //    <div id="Name" class="title bg-primary"></div>
  //    <div id="Position" class="position bg-primary"></div>
  //    <div class="ID"></div>
  //    <div class="email"></div>
  //    <div class="misc"></div>
  // </div>`;
  return memeberData;
};
module.exports = generateHTML;
