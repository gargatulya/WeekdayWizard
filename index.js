import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res)=>{

    const today = new Date();
    const day = today.getDate();

    let type = "A Weekday";
    let adv = "Its time to work hard.";

    if(day===0 || day === 6){
        type="the weekend";
        adv = "Its time to have some fun.";
    }

    res.render("index.ejs" , {
        dayType: type, advice: adv,
    });
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`);
});