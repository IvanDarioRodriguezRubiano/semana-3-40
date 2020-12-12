'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{//users es el nombre de la tabla de la base de datos
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$12$aJtGhotGjcvubnwKaN1VOu1ulJ7zf1ozfoBvITE0kh9g67Vg9oMhG', //123456
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};