module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    phone: DataTypes.STRING,
    role: DataTypes.ENUM('agent', 'buyer', 'landlord'),
    verified: { type: DataTypes.BOOLEAN, defaultValue: false }
  });
};
