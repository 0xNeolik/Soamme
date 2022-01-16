const router = require("express").Router();
const User = require("../../models/User.model");
const bcrypt = require("bcrypt");

router.post("/signUp", (req, res) => {
  let { email, password, username } = req.body;

  User.findOne({ email })
    .then((user) => {
      const bcryptSalt = 10;
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
      user
        ? res.status(500).send("Error usuario ya registrado")
        : User.create({
            email,
            password: hashPass,
            username,
          }).then((response) => {
            req.session.currentUser = response;
            return res.json(response);
          });
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("-----", req.body);
  User.findOne({ email })
    .then((user) => {
      bcrypt.compareSync(password, user.password) //Validate password
        ? ((req.session.currentUser = user), res.json({ user: user }))
        : res.status(500).send("Error contraseña incorrecta!");
    })
    .catch((err) => res.status(500).send("Error contraseña incorrecta!"));
});

router.get("/isloggedin", (req, res) => {
  const _id = req.session.currentUser._id;
  User.findById(_id)
    .then((user) => {
      req.session.currentUser
        ? res.json(user)
        : res.status(401).json({ code: 401, message: "Unauthorized" });
    })
    .catch((err) => console.log(err));
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) =>
    res.status(200).json({ code: 200, message: "Logout successful" })
  );
});

module.exports = router;
