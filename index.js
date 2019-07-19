const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'

mongoose.connect('mongodb://localhost/recipeApp', {useNewUrlParser: true}) 
  .then(() => {
    console.log('Connected to Mongo!');
    })
  .then(() => {
    console.log("Data successfully updated");
    return Recipe.findOne({title: 'Rigatoni alla Genovese'}, function(err, doc){
      doc.duration = 100;
      doc.save()
    }); 
  })
  .then(() => {
    console.log("Data succesfully deleted")
    return Recipe.deleteOne({title: 'Carrot Cake'});
  })
  .then(() => {
    console.log("Connection closed")
    return mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
    });





// Recipe.findOne({title: 'Rigatoni alla Genovese'}, function(err, doc){
//   doc.duration = 100;
//   doc.save();
//   err ? console.log("ERRERERERREEOOEOEOREOREOO DATA NOT UPDATED!!!!!!") : console.log("Data successfully updated")
// });

// Recipe.remove({title: 'Carrot Cake'}, function(err){
//   err ? console.log("ERRERERERREEOOEOEOREOREOO DATA NOT DELETED!!!!!!!") : console.log("Data successfully deleted")
// });

// mongoose.connection.close();