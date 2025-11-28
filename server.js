const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write(`
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
    <html>
    <head>
      <title>My Web App</title>
      <style>
        body {
          font-style: italic;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          color: white;
          text-align: center;
          padding-top: 80px;w
        }

        .card {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 30px;
          width: 60%;
          margin: auto;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        h1 {
          margin-bottom: 10px;
          font-size: 40px;
        }

        p {
          font-size: 20px;
          margin: 10px 0;
        }

        .quote {
  font-family: "Dancing Script", cursive;
  font-style: italic;
  font-weight: 700; /* bold */
  color: #ffe;
  font-size: 28px;
  margin-top: 20px;
}

      </style>
    </head>

    <body>
      <div class="card">
        <h1>Welcome to My Web App</h1>
        <p><strong>Full Name:</strong> KAYLA MAE MANALILI</p>
        <p><strong>Class Section:</strong> BSIT BA-4101</p>
        <p class="quote">"Freedom is having nothing to hide, nothing to chase, and nothing to prove."</p>
      </div>
    </body>
    </html>
  `);

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
