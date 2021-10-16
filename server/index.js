const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const ctrl = require('./controller')

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["All will go well with your new project.",
					 "Be careful or you could fall for some tricks today.",
					 "Advice is like kissing. It costs nothing and is a pleasant thing to do.",
           "Any decision you have to make tomorrow is a good decision.",
           "Take the high road.",
  ];

  // choose random fortune
  let rIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[rIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/color", (req, res) => {
  const colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange']

  // choose random color
  let rColor = Math.floor(Math.random() * colors.length)
  let randomColor = colors[rColor]

  res.status(200).send(randomColor)
})

app.get("/api/encrypt", (req, res) => {
  let message = 

  res.status(200).send()
}
  

 

app.listen(4000, () => console.log("Unity 4000"));
