
/*------wapper------*/

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

/*------scroll effect------*/

window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
      for(var i = 0; i < elements.length; i++) {
        let element = elements[i];
  
        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
  });

  /*------CARRINHO DE COMPRAS------*/

  var compra = document.getElementById("addCesto");
  var venda = document.getElementById("removeCesto");
  var mostrar = document.getElementById("mostrar");
  var mostrar2 = document.getElementById("mostrar2");
  var preço = 0;
  
  function adicionarCompra() {
      preço = preço + 20;
      console.log("Preço compra" + preço)
      mostrar.innerHTML = preço + "€";
      mostrar2.innerHTML = preço + "€"
  }
  
  function removerCompra() {
      preço = preço - 20;
      if (preço <= 0) {
          preço = 0;
      }
      console.log("Preço compra" + preço)
      mostrar.innerHTML = preço + "€";
      mostrar2.innerHTML = preço + "€"
  }

  
  compra.addEventListener("click", adicionarCompra);
  venda.addEventListener("click", removerCompra);
  

  