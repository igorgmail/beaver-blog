/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const pass = await bcrypt.hash('123', 10);
    await queryInterface.bulkInsert('Users', [{
      name: 'igor',
      email: 'igor@mail.ru',
      password: pass,
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
