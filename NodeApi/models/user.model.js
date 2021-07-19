module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("st_users", {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            field: 'id',
        },
        name: {
            type: Sequelize.STRING(100),
            allowNull: true,
            comment: 'Name of user',
            defaultValue: null,
        },       
        last_name: {
            type: Sequelize.STRING(100),
             allowNull: true,
            comment: 'last name of user',
            defaultValue: null,
        },
        phone_no: {
            type: Sequelize.STRING(15), 
            allowNull: true,
            defaultValue: null,

        },     
        email: {
            type: Sequelize.STRING(50),
            allowNull: true,
            defaultValue: null,
        },        
        status: {
            type: Sequelize.BOOLEAN,
             allowNull: true,
            defaultValue: true,
            comment: '1=> Active, 0=>Inactive'
        },
       
    },
    {
        indexes: [
            {fields: ['email'], unique: true}
        ]
    }
    );

    return User;
};