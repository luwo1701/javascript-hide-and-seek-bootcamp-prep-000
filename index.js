function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const tree = getSelectorAll(document)
  console.log(tree)
  return tree
}