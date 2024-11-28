const express = require("express")
const path = require("path")
const router = express.Router()
const app = express()

app.use(router)

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/* Homepage */
router.get("/",(req,res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'html', 'index.html'))
})

/* Listen */
app.listen(3000,() =>{
    console.log(`listening on port 3000`)
})