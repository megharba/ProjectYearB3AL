/**
 * Jugement.js
 * 
 * Création des Jugements
 * liste  des Jugements
 */
const mongoose = require('mongoose');

const Jugement = require("../models/Jugement");

const path = require('path');

const multer = require('../middleware/multer-config')

// get test
exports.getTest = (req, res, next) => {
    res.send({
        Jugement: [{
            title: "test",
            imgUrl: "test",
            note: "test"
        },
        {
            title: "test",
            imgUrl: "test",
            note: "test"
        }]
    })
};

// Création des Jugements
exports.createJugement = (req, res, next) => {
    console.log('req.file ', req.file)
    console.log('req.body ', req.body)

    const title = req.body.title;
    const imgUrl ="C:\\Users\\Public\\projectYears\\" + req.file.path ;
    const note = Math.floor(Math.random() * 20);

    console.log(note)
    console.log(req.file.path)
    //Enregistrement des Posts dans la base de données
    const jugement = new Jugement({
        title: title,
        imgUrl: imgUrl,
        note: note
        
    });


    jugement
        .save()
        .then((result) => {
            res.status(201).json({
                message: 'Jugement created successfully!',
                Jugement: result
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        }
        );

};

//Classement des Jugements
// Récupération de la liste de produits en ligne
exports.getJugements = (req, res, next) => {
    const currentPage = req.query.page || 1;
    const perPage = 30;
    const sort = { note: -1 }

    let totalItems;
    Jugement.find()
      .countDocuments()
      .then(count => {
        totalItems = count;
        return Jugement.find()
          .skip((currentPage - 1) * perPage)
          .limit(perPage)
          .sort(sort)
      })
      .then(jugements => {
        
        res
          .status(200)
          .json({
            message: 'Fetched jugement successfully.',
            jugements : jugements,
            totalItems: totalItems
          });
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  };