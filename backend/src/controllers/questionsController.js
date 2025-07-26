import Question from "../model/Question.js";



export async function getAllQuestions(req, res) {
  try {
    const quest = await Question.find();
    res.status(200).json(quest);
  } catch (error) {
    console.error("error in finding questions", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function postQuestions(req,res){
//201 = resource created
try {
    const {Done,Topic,Problem,URL,Date,level,rating} = req.body;

    const newQuest = new Question({Done,Topic,Problem,URL,Date,level,rating});

    await newQuest.save();
    res.status(201).json(newQuest);

} catch (error) {
     console.error("error in creating questions", error);
    res.status(500).json({ message: "Internal server error",error });
}
}


export async function updateQuestion(req,res){

    res.status(200).json({message:"updated a resource"});
}

export async function deleteQuestion(req,res){
    res.status(200).json({message:"deleted a resource"});
}
