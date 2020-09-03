const http = require('http');
const url = require('url');
const service = require('./service.js');

module.exports = http.createServer((req, res) => {
  console.log(req.method)
  const reqUrl = url.parse(req.url, true);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, DELETE, POST');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "PUT, OPTIONS, POST, DELETE, GET",
  };

  if (req.method === "OPTIONS") {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  if ((new RegExp("/notes/" + "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$")).test(req.url) && req.method === 'GET') {
    console.log('Request Type:' +
      req.method + ' Endpoint: ' +
      reqUrl.pathname);

    let noteId = req.url.split("/")[2];
    service.getNoteById(req, res, noteId);
  }

  if (reqUrl.pathname === '/notes' && req.method === 'GET') {
    console.log('Request Type:' +
      req.method + ' Endpoint: ' +
      reqUrl.pathname);

    service.getNotes(req, res);
  }

  if (reqUrl.pathname === '/notes' && req.method === 'POST') {
    console.log('Request Type:' +
      req.method + ' Endpoint: ' +
      reqUrl.pathname);

    service.addNote(req, res);
  }

  if ((new RegExp("/notes/" + "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$")).test(req.url) && req.method === 'PUT') {
    console.log('Request Type:' +
      req.method + ' Endpoint: ' +
      reqUrl.pathname);
    let noteId = req.url.split("/")[2];
    service.updateNote(req, res, noteId);
  }

  if ((new RegExp("/notes/" + "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$")).test(req.url) && req.method === 'DELETE') {
    console.log('Request Type:' +
      req.method + ' Endpoint: ' +
      reqUrl.pathname);
    let noteId = req.url.split("/")[2];
    service.deleteNote(req, res, noteId);
  }
});