//categories scehma

// const { Timestamp } = require("bson");
//const { timeStamp } = require("console");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema(
  {
    name: {
      String,
      required: true,
    },

    subCategories:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subcategories',
    }]
  },
);



module.exports = mongoose.model('Categories', CategoriesSchema);


//subcategories schema



// const { Timestamp } = require("bson");
//const { timeStamp } = require("console");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubcategoriesSchema = new Schema(
  {
    name: {
      String,
      required: true,
    },

    Category:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Categories',
    }]
  }
);


module.exports = mongoose.model('Subcategories', SubcategoriesSchema);

