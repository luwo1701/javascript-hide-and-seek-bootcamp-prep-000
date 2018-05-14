function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const tree = document.querySelectorAll("#nested")
  console.log(tree)
  return tree
}