const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Assay, Patient, Results, Run, Tech, AssayTech } = require('../../models');

//GET /api/users
router.get('/', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../login');
  }
    // Access our Tech model and run .findAll() method
    Tech.findAll({
        attributes: {exclude: ['password']},
        include: [
          {
            model: Assay,
            as: 'assay_techs',
            attributes: [
              'assay_name', 'analyte'
            ]
          }
        ]
    })
    .then(dbTechData => res.json(dbTechData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// GET /api/users/1
router.get('/:id', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../../login');
  }
    Tech.findOne({
        attributes: { 
            exclude: ['password'],
        },
        include: [
            {
                model: Run,
                attributes: ['assay_id', 'id']
            }
        ],
        where: {
            id: req.params.id
        }
    })
    .then(dbTechData => {
        if (!dbTechData) {
            res.status(404).json({ message: 'No tech found with this id'});
            return;
        }
        res.json(dbTechData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// POST /api/users
router.post('/', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234' }
    Tech.create({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        supervisor: req.body.supervisor,
        assay_id: req.body.assayid,
        username: req.body.username,
        password: req.body.password
    })
    .then(dbTechData => {
      console.log(dbTechData)
      
        req.session.save(() => {
            req.session.user_id = dbTechData.id;
            req.session.username = dbTechData.username;
            req.session.loggedIn = true;

            res.json(dbTechData);
        })
    })
    .catch(err => {
      // checks for valid password and sends message to user if password invalid
      if (err.name === 'SequelizeValidationError') {
        var message = err.errors.map(e => e.message).toString();
          res.status(422).json({ 
          success: false,
          msg: message
        })
      } else {
        console.log(err);
        res.status(500).json(err);
      }
    })
});

router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    Tech.findOne({
      where: {
        username: req.body.username
      }
    }).then(dbTechData => {
      if (!dbTechData) {
        res.status(401).json({ message: 'No user with that username identified!' });
        return;
      }
  
      const validPassword = dbTechData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbTechData.id;
        req.session.username = dbTechData.username;
        req.session.loggedIn = true;
        
        res.json({ user: dbTechData, message: 'You are now logged in!' });
      });
    });
  });
  
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

// PUT /api/users/1
router.put('/:id', (req, res) => {
    //expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234' }

    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    Tech.update({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        supervisor: req.body.supervisor,
        assay_id: req.body.assayid,
        username: req.body.username,
        password: req.body.password
    }, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbTechData=> {
        if (!dbTechData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbTechData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../../login');
  }
    Tech.destroy ({
        where: {
            id: req.params.id
        }
    })
    .then(dbTechData => {
        if (!dbTechData) {
            res.status(404).json({ message: 'No user found with this id' })
            return;
        }
        res.json(dbTechData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router;