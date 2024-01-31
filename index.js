import axios from "axios";
import express from "express";

const app = express();
const port = 3000;
const api_URL = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";

app.get("/", async (req, res) => {
    try {
        const shibe = await axios.get(api_URL);
        console.log(shibe);
        res.render("index.ejs", {doggo : shibe.data});
    } catch (error) {

    };

});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
