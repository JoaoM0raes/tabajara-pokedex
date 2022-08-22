

export class mainClasse{
  
   botao!:HTMLButtonElement
   pokemon!:HTMLInputElement
   nomePokemon!:HTMLElement
   topdiv!:HTMLElement
   pegarFoto!:HTMLElement


  constructor(){
    this.configurarElementos();
    this.pegarPokemon();
  }

  configurarElementos():void{
    this.botao =<HTMLButtonElement>document.getElementById("btn")
    this.pokemon= <HTMLInputElement>document.getElementById("pokemon-texto");
    this.nomePokemon=<HTMLElement>document.getElementById("pokemon-name");
    this.topdiv=<HTMLElement>document.getElementById("top-div");
    this.pegarFoto=<HTMLElement>document.getElementById("pokemon");

  }
  
  pegarPokemon():void{
    this.botao.addEventListener("click",()=>{ 
           
       let pokemon:string=this.pokemon.value.trim().toLowerCase();       
       this.fetchServer(pokemon);
    })
  }
  fetchServer(pokemon:string):void{
     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
     .then(Response=>Response.json()) 
     .then(data=>{
      console.log()
        if(data.name){
        
          let html:string=` 
        <div class="lif-bar">                                   
          <div class="pokemon-Stats">
              <h2 id="pokemon-name">${data.name}</h2>
              <h4>lv:20</h4>
          </div>
          <div class="life-bar-stats">
            <h1>Hp:</h1>
            <img src="/public/assets/f9b44e94efcd50e.png" alt="" srcset="">                   
          </div> 
        </div>
       <div>
          <img class="pokemom" id="pokemon" src="${data.sprites.front_default}" alt="">
       </div>`
          this.topdiv.innerHTML=html
          
        }
        else{
          return; 
        }
 
     })   
   }
 

}
 new mainClasse()