const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

const cre = `░█▀▀░█▀▄░█▀▀░█▀█░▀█▀░█▀▀░█▀▄░░░█▀▄░█░█
░█░░░█▀▄░█▀▀░█▀█░░█░░█▀▀░█░█░░░█▀▄░░█░
░▀▀▀░▀░▀░▀▀▀░▀░▀░░▀░░▀▀▀░▀▀░░░░▀▀░░░▀░`
const str = `░█▀▀░▀█▀░█▀▄░█▀▀░█▀█░█▄█░▀█▀░█░░░█░█
░▀▀█░░█░░█▀▄░█▀▀░█▀█░█░█░░█░░█░░░░█░
░▀▀▀░▀▀▀░▀░▀░▀░░░▀░▀░▀░▀░▀▀▀░▀▀▀░░▀░`
const line =`░▀▄░░▀▄░░▀▄░░▀▄░░▀▄░░░▄▀░░▄▀░░▄▀░░▄▀░░▄▀
░░▄▀░░▄▀░░▄▀░░▄▀░░▄▀░▀▄░░▀▄░░▀▄░░▀▄░░▀▄░
░▀░░░▀░░░▀░░░▀░░░▀░░░░░▀░░░▀░░░▀░░░▀░░░▀`



app.get('/', (req, res) => {
  res.json({ message: 'Ahoy!' });
});

app.listen(9000, () => {
  console.log(line)
  console.log(cre)
  console.log(str)
  console.log(line)
  console.log("----------------------------------------")
  console.log("  Server Run On" + " http://localhost:" + 9000)
  console.log("----------------------------------------")
});
