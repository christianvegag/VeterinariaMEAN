import animal from "../models/animal.js";

const registerAnimal = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.race ||
    !req.body.weight ||
    !req.body.height ||
    !req.body.health ||
    !req.body.age
  )
    return res.status(400).send({ message: "Incomplete data" });

  let schema = new animal({
    name : req.body.name,
    race : !req.body.race,
    weight : req.body.weight,
    height: req.body.height,
    health: req.body.health,
    age: req.body.age,
    dbStatus: true,
  });

  let result = await schema.save();
  if (!result)
    return res.status(500).send({ message: "Failed to register animal" });

  res.status(200).send({ result });
};

export default { registerAnimal };
