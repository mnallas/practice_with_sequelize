module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    fname: DataTypes.STRING,
  });
  return Student;
};
