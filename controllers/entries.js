// Controller for Entries

//INDEX
module.exports.renderEntriesIndex = function(req, res, next) {
  // Entry.find(function(error, entries){
  //     if (error) return response.send(error);
  //     response.send(entries);
  //   });
  res.render('entries/index', { title: 'WDInstagram' });
};

//NEW POST
module.exports.newUpload = function(req, res, next) {
  res.render('entries/new', { title: 'New Post' });
  var entry = new Entry();
  entry.title = request.body.title;
  entry.user = request.body.user;
  entry.save(function(error, entry){
      if (error) return response.send(error);
      response.send(entry);
  });
};


//SHOW
module.exports.showPage = function(req, res, next) {
  // Entry.findOne({_id: request.params.entry_id}, function(error, entry){
  //   if(error) return response.send(error);
  //   response.send(entry.comments);
  // });
  res.render('entries/show', { title: 'Show' });
};


