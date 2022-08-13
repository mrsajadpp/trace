const fs = require('fs');
function short(url, number) {
  fs.writeFile(`redirect/${number}.html`, `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${url}</title>
    <style>
      .body{
        width: 100%;
        height: 100vh;
        align-items: center;
        justify-content: center
        display: flex;
      }
    </style>
  </head>
  <body>
  <div class="body" ></div>
    <script type="text/javascript" charset="utf-8">
      location.href = "${url}";
    </script>
  </body>
</html>`, function (err) {
     if (err) throw err;
     console.log('File is created successfully.');
  });
}
module.exports = short;
