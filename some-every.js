// coding: utf-8
// Nodeschool.io - Functional Javascript Workshop


function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
        return submittedUsers.every(function (submit) {
            return goodUsers.some (function (good) {
                return good.id === submit.id;
            })
        })
    };
}

module.exports = checkUsersValid;


/* 
Official Solution


module.exports = function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
          return goodUsers.some(function(goodUser) {
            return goodUser.id === submittedUser.id
          })
        })
      }
    }

*/
