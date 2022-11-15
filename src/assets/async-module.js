function getComponent(){
   return import('lodash').then(({default: _})=>{
      const divWrap = document.createElement('div');
      divWrap.innerHTML = _.join(['123', '456', '789'], ' ');
      return divWrap
   })
}
getComponent().then((divWrap) =>{
   document.body.appendChild(divWrap)
})