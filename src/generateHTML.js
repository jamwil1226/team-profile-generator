const generateTeam = employeeInfo => {
 
    const manager = employeeInfo.manager.map(function(manager) {
        let managerHtml = 
        `<div class="col-xs-6 col-sm-3">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${manager.name}</h3>
                    <h4>Manager</h4><i class="material-icons">content_paste</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${manager.id}</p>
                    <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="office">Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>`
        return managerHtml
    });

    const engineer = employeeInfo.engineer.map(function(engineer) {
        let engineerHtml = 
        `<div class="col-xs-6 col-sm-3">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${engineer.name}</h3>
                    <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${engineer.id}</p>
                    <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                </div>
            </div>
        </div>`
        return engineerHtml
    })

    const intern = employeeInfo.intern.map(function(intern) {
        let interHtml = 
        `<div class="col-xs-6 col-sm-3">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${intern.name}</h3>
                    <h4>Intern</h4><i class="material-icons">assignment_ind</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${intern.id}</p>
                    <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="school">School: ${intern.school}</p>
                </div>
            </div>
        </div>`
        return interHtml
    })
    return [manager,engineer,intern]
}

module.exports = generator => {
    return `
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-centerjs">
                    ${generateTeam(generator)}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>`
}

