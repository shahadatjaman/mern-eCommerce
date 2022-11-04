const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

module.exports = {
  objectId(_id) {
    return _id.toString();
  },
  newTime() {
    return new Date().toISOString();
  },
  mongooseID() {
    return ObjectId();
  },
  isValidID({ product_id }) {
    return ObjectId.isValid(product_id);
  },
};
