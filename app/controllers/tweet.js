exports.getTweetsByHashTag = function(req, res) {
  
  var result = {
      isSuccess: true,
      message: null,
      errors: [],
      data: null
  };
  // use mongoose to get all categories in the database
  Category.find({
      'isActive': true
  }, function(err, categories) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
          // A general error (db, crypto, etc…)
          result.errors.push(err)
          result.isSuccess = false;
          return res.json(result);
      }

      result.data = categories;
      res.json(result); // return all categories in JSON format

  });
};