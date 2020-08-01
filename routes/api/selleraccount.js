const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const SellerInfo = require("../../models/SellerInfo");
const SellerAc = require("../../models/SellerAc");
const User = require("../../models/User");

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Enter a password with 6 or more characters").isLength({
      min: 6,
    }),
    check("username", "Use a unique username for your business.").not().isEmpty(),
    check("companyName", "Select a Company Name").not().isEmpty(),
    check("addressL1", "Enter address").not().isEmpty(),
    check("country", "Select country").not().isEmpty(),
    check("state", "Select state").not().isEmpty(),
    check("pinCode", "Enter pincode").not().isEmpty(),
    check("accountNo", "Enter account number").not().isEmpty(),
    check("bank", "Select your bank").not().isEmpty(),
    check("ifsc", "Enter your IFSC code").not().isEmpty(),
    check("AcName", "Enter account holder's name").not().isEmpty(),

    //Add account type option
  ],
  async (req, res) => {
    // console.log(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      //remove all jsons while uploading to prevent security
    }
    const { name, email, state , pinCode, accountNo, bank, companyName, addressL1, addressL2, ifsc, country, username, password, roles, AcName, taxNumber } = req.body;

    try {
      let user = await User.findOne({ email, username });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      user = new User({
        name,
        email:  email.toLowerCase(),
        username: username.toLowerCase(),
        avatar,
        password,
        roles,
      });


      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      let sellerInfo = new SellerInfo({
        email: email.toLowerCase(),    
        companyName,
        addressL1,
        addressL2,
        country,
        state,
        pinCode,
        taxNumber: taxNumber.toLowerCase()
    })

    let seller2 = new SellerAc({
        email: email.toLowerCase(),
        accountNo,
        bank,
        ifsc,
        AcName,
    })

    await sellerInfo.save();
    await seller2.save()

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Fucked Up");
    }
  }
);


module.exports = router;
