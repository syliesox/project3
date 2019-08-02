const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const names = fs.readdirSync(path.normalize(__dirname + '/models'));


let models = {};

if (mongoose.connection.readyState === 0) {
    mongoose.connect(require('./connection-config.js')).then((res_db) => {
        console.log('Mongoose connected:', require('./connection-config.js'));
        return res_db;
    }).catch(err => {
        console.error('Mongoose connect error', err, require('./connection-config.js'))
    });
}
for (let index in names) {
    if (names.hasOwnProperty(index)) {
        if (!names[index].match(/\.js$/)) break;
        let model = require('./models/' + names[index]);
        models[model.modelName] = model;
    }
}

Object.defineProperty(models.__proto__, 'toContext', {
    enumerable: false,
    value: function (context) {
        for (let name in this) {
            if (this.hasOwnProperty(name))
                context[name] = this[name];
        }
        return context;
    }
});

module.exports = models;
