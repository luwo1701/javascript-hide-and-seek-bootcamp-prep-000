function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const tree = querySelectorAll(document)
  console.log(tree)
  return tree
}