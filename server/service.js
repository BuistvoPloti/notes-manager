const url = require('url');
let db = require('./db')
const helpers = require('./helpers')

exports.getNotes = function (req, res) {
  let response = {
    notes: db.notes
  };
  res.statusCode = 200;
  console.log(JSON.stringify(db.notes))
  res.end(JSON.stringify(response));
};

exports.getNoteById = function (req, res, noteId) {
  let response
  if (noteId) {
    response = {
      notes: helpers.search(noteId, db.notes)
    };
  } else response = {
    status: 'not found'
  }
  res.statusCode = 200;
  res.end(JSON.stringify(response));
};

exports.addNote = function (req, res) {
  let body = ''
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
      postBody = JSON.parse(body);
      db.notes.push(postBody)
      console.log(JSON.stringify(db))
    let response = {
      "status": 200,
      "lol": 123
    };
    res.statusCode = 200;
    res.end(JSON.stringify(response));
  });
}

exports.updateNote = function (req, res, noteId) {
  let body = ''
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    postBody = JSON.parse(body);
    let specificNote = helpers.search(noteId, db.notes)
    let find = db.notes.indexOf(specificNote)
    db.notes[find] = {id: noteId, text: postBody.text}
    let response = {
      "status": 200
    };
    res.statusCode = 200;
    res.end(JSON.stringify(response));
  });
}

exports.deleteNote = function (req, res, noteId) {
  req.on('data', function (chunk) {
    console.log('insideDeteleNote')
  });
  req.on('end', function () {
    let specificNote = helpers.search(noteId, db.notes)
    console.log(noteId)
    if (db.notes.length > 0) {
      db.notes = db.notes.filter(function (obj) {
        return obj.id !== specificNote.id;
      });
    } else {
      db.notes = []
    }
    let response = {
      "status": 200
    };
    console.log(JSON.stringify(response))
    res.statusCode = 200;
    res.end(JSON.stringify(response));
  });
}


