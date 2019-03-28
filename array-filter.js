function getShortMessages(messages) {
     var filtered = messages.filter(function (msg) {
         if (msg.message && msg.message.length < 50) {
             return true;
         }
     });
  
     return filtered.map(function (msg) {
         return msg.message;
         // console.log(msg.message);
     })     
 }


module.exports = getShortMessages



/* Official Solution 

module.exports = function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }

*/
