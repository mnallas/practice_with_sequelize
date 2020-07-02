const db = require("./models");

// how to use promises wrong
// db.sequelize.sync().then(() => {
//   db.Student.create({ fname: "Mickey" }).then(() => {
//     db.Student.findAll().then((students) => {
//       console.log(students);
//     });
//   });
// });
// how to use promises correctly (promise chainning)
db.sequelize
  .sync()
  //   .then(() => {
  //     return db.Student.create({ fname: "Michael" });
  //   })
  .then(() => {
    return db.Student.findAll();
  })
  .then((allStudents) => {
    console.log(allStudents);
    process.exit();
  });
