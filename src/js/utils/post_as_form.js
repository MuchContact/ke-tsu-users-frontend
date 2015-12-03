import clone from 'safe-clone-deep'

export {addItemsToForm as default};

function addItemsToForm(obj) {
  var result = [];
  for(var key in obj) {
    result.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
  }
  return result.join("&");
}