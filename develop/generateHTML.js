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
      <div class ="container">
      ${teamMember}
      </div>
    </body>
  </html>`;
}

createMember = (data) => {
  let memeberData = '';
  data.forEach((i) => {
    if ('ManagerName' in i) {
      memeberData += `<div class="manager">
     <div id="Name" class="title bg-primary">${i.ManagerName}</div>
     <div id="Position" class="position bg-primary">Manager</div>
     <div class="ID">${i.ID}</div>
     <div class="email"><a href="mailto:${i.Email}">${i.Email}</a></div>
     <div class="misc">${i.OfficeNumber}</div>
  </div>`;
    } else if ('EngineerName' in i) {
      memeberData += `<div class="engineer">
      <div id="Name" class="title bg-primary">${i.EngineerName}</div>
      <div id="Position" class="position bg-primary">Engineer</div>
      <div class="ID">${i.ID}</div>
      <div class="email"><a href="https://github.com/${i.Github}">${i.Github}</a></div>
      <div class="misc"><a href="mailto:${i.Email}">${i.Email}</a></div>
   </div>`;
    } else if ('InternName' in i) {
      memeberData += `<div class="intern">
      <div id="Name" class="title bg-primary">${i.InternName}</div>
      <div id="Position" class="position bg-primary">Intern</div>
      <div class="ID">${i.ID}</div>
      <div class="email"><a href="mailto:${i.Email}">${i.Email}</a></div>
      <div class="misc">${i.School}</div>
   </div>`;
    }
  });

  return memeberData;
};
module.exports = generateHTML;
