const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 // Création d'un schéma JugementSchema 
 const JugementSchema = new Schema(
   {
     title: {
       type: String,
       required: true
     },
     imgUrl: {
       type: String,
       required: true
     },
     note: {
        type: String,
        required: true
      }
   },
   { timestamps: true }
 );
 
 module.exports = mongoose.model('Jugement', JugementSchema);
 