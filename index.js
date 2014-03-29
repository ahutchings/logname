var variables = ['LOGNAME', 'USER', 'LNAME', 'USERNAME'];

function getUser (callback) {
  var i = 0, n = variables.length, username;

  while (!username && i < n) {
    username = process.env[variables[i]];
    i++;
  }

  return username;
}

module.exports = {
  getUser: getUser
};
