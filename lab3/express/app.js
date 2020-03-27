const express = require('express');
const app = express()

const PORT = 3000

// route
const userRoute = require(`./route/user.route`)
const dogRoute = require(`./route/dog.route`)
const catRoute = require(`./route/cat.route`)

// static content
app.use(express.static(`./public/`));

app.use(`/user`, userRoute)
app.use(`/dog`, dogRoute);
app.use(`/cat`, catRoute); 

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});