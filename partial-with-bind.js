// coding: utf-8
// NodeSchool.io - Functional Javascript Workshop
// Apply with Bind


module.exports = function (namespace) {
    return console.log.bind(console, namespace);
}

