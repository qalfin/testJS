const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    reservation : { type : mongoose.Schema.Types.ObjectId, ref : 'Reservation', required : true},
    product : { type : mongoose.Schema.Types.ObjectId, ref : 'Product', required : true},
    user : { type : mongoose.Schema.Types.ObjectId, ref : 'User', required : true},
    status : { type : Number, required : true},
    quantity: { type : Number, default: 1 },
    date: { type : Date, default : Date.now}
});

module.exports = mongoose.model('Order', orderSchema, 'orders');