import user from "../models/user.js";

const registerUser = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.description
  )
    return res.status(400).send({ message: "Incomplete data" });

  let schema = new user({
    name : req.body.name,
    email : !req.body.email,
    password : req.body.password,
    description: req.body.description,
    dbStatus: true,
  });

  let result = await schema.save();
  if (!result)
    return res.status(500).send({ message: "Failed to register user" });

  res.status(200).send({ result });
};

export default { registerUser };
