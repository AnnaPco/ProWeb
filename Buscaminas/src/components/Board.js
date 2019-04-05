import React, { Component } from 'react';
import Square from './Square';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(81).fill(0),
      squaris: Array(81).fill(null),
      indice : Array(10).fill(null),
      adyacente : Array(81).fill(null),
      cont : 0,
      bandera : 0,
      winner : 0,
      winnir : 0,
    };

    this.queue=[];
    this.queui=[];
    this.indices()
    this.numerosCercanos()
  }

  handleClick(i) {
    if (this.state.squares[i] == 'X') 
    {
      if (this.state.bandera == 0) 
      {
        const squaris = this.state.squaris.slice();
        squaris[i] = this.state.squares[i];
        this.setState({squaris : squaris});
        this.state.bandera = 1;
        //window.location.reload();
      }      
      return;
    }

    if(this.state.squares[i] == 0)
    {
      this.adyacentes(i)
    }

    else
    {
      if (this.state.bandera==1) 
      {
        return;
      }
      else
      {
        const squaris = this.state.squaris.slice();
        squaris[i] = this.state.squares[i];
        this.setState({squaris : squaris});
      }
    }    
  }

  adyacentes(i)
  {
    this.queue.push(i);
    this.state.squares[i]='*';
    this.state.squaris[i]='*';
    this.state.winnir++;

    while((this.queue.length))
    {
      if (i == 0) 
      {
        if(this.state.squares[i+1] == 0)
        {
          this.queue.push(i+1);
          this.state.squares[i+1] = '*';
          this.state.squaris[i+1] = '*';
          this.state.winnir++;
        }

        if(this.state.squares[9] == 0)
        {
          this.queue.push(9);
          this.state.squares[9] = '*';
          this.state.squaris[9] = '*';
          this.state.winnir++;
        }

        if(this.state.squares[10] == 0)
        {
          this.queue.push(10);
          this.state.squares[10] = '*';
          this.state.squaris[10] = '*';
          this.state.winnir++;
        }
      }
      //Esquina superior derecha
      if (i == 8) 
      {
          if(this.state.squares[i-1] == 0)
          {
            this.queue.push(i-1);
            this.state.squares[i-1] = '*';
            this.state.squaris[i-1] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[16] == 0)
          {
            this.queue.push(16);
            this.state.squares[16] = '*';
            this.state.squaris[16] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[17] == 0)
          {
            this.queue.push(17);
            this.state.squares[17] = '*';
            this.state.squaris[17] = '*';
            this.state.winnir++;
          }
      }
      //Esquina inferior izquierda
      if (i == 72) 
      {
          if(this.state.squares[i+1] == 0)
          {
            this.queue.push(i+1);
            this.state.squares[i+1] = '*';
            this.state.squaris[i+1] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[63] == 0)
          {
            this.queue.push(63);
            this.state.squares[63] = '*';
            this.state.squaris[63] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[64] == 0)
          {
            this.queue.push(64);
            this.state.squares[64] = '*';
            this.state.squaris[64] = '*';
            this.state.winnir++;
          }
      }
      //Esquina inferior izquierda
      if (i == 80) 
      {
          if(this.state.squares[i-1] == 0)
          {
            this.queue.push(i-1);
            this.state.squares[i-1] = '*';
            this.state.squaris[i-1] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[70] == 0)
          {
            this.queue.push(70);
            this.state.squares[70] = '*';
            this.state.squaris[70] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[71] == 0)
          {
            this.queue.push(71);
            this.state.squares[71] = '*';
            this.state.squaris[71] = '*';
            this.state.winnir++;
          }
      }

      //linea superior
      if (i > 0 && i < 8) 
      {
          if(this.state.squares[i+1] == 0)
          {
            this.queue.push(i+1);
            this.state.squares[i+1] = '*';
            this.state.squaris[i+1] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i-1] == 0)
          {
            this.queue.push(i-1);
            this.state.squares[i-1] = '*';
            this.state.squaris[i-1] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i+8] == 0)
          {
            this.queue.push(i+8);
            this.state.squares[i+8] = '*';
            this.state.squaris[i+8] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i+9] == 0)
          {
            this.queue.push(i+9);
            this.state.squares[i+9] = '*';
            this.state.squaris[i+9] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i+10] == 0)
          {
            this.queue.push(i+10);
            this.state.squares[i+10] = '*';
            this.state.squaris[i+10] = '*';
            this.state.winnir++;
          }
      }

      //linea izquierda
      if (i == 9 || i == 18 || i == 27 || i== 36 || i == 45 || i == 54 || i == 63) 
      {
          if(this.state.squares[i+1] == 0)
          {
            this.queue.push(i+1);
            this.state.squares[i+1] = '*';
            this.state.squaris[i+1] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i-9] == 0)
          {
            this.queue.push(i-9);
            this.state.squares[i-9] = '*';
            this.state.squaris[i-9] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i-8] == 0)
          {
            this.queue.push(i-8);
            this.state.squares[i-8] = '*';
            this.state.squaris[i-8] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i+9] == 0)
          {
            this.queue.push(i+9);
            this.state.squares[i+9] = '*';
            this.state.squaris[i+9] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i+10] == 0)
          {
            this.queue.push(i+10);
            this.state.squares[i+10] = '*';
            this.state.squaris[i+10] = '*';
            this.state.winnir++;
          }
      }

      //linea Derecha
      if (i == 17 || i == 26 || i== 35 || i == 44 || i == 53 || i == 62 || i == 71) 
      {
          if(this.state.squares[i-1] == 0)
          {
            this.queue.push(i-1);
            this.state.squares[i-1] = '*';
            this.state.squaris[i-1] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i-9] == 0)
          {
            this.queue.push(i-9);
            this.state.squares[i-9] = '*';
            this.state.squaris[i-9] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i-10] == 0)
          {
            this.queue.push(i-10);
            this.state.squares[i-10] = '*';
            this.state.squaris[i-10] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i+8] == 0)
          {
            this.queue.push(i+8);
            this.state.squares[i+8] = '*';
            this.state.squaris[i+8] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i+9] == 0)
          {
            this.queue.push(i+9);
            this.state.squares[i+9] = '*';
            this.state.squaris[i+9] = '*';
            this.state.winnir++;
          }
      }

      //linea Inferior
      if (i > 72 && i < 80) 
      {
          if(this.state.squares[i-1] == 0)
          {
            this.queue.push(i-1);
            this.state.squares[i-1] = '*';
            this.state.squaris[i-1] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i+1] == 0)
          {
            this.queue.push(i+1);
            this.state.squares[i+1] = '*';
            this.state.squaris[i+1] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i-8] == 0)
          {
            this.queue.push(i-8);
            this.state.squares[i-8] = '*';
            this.state.squaris[i-8] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i-9] == 0)
          {
            this.queue.push(i-9);
            this.state.squares[i-9] = '*';
            this.state.squaris[i-9] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i-10] == 0)
          {
            this.queue.push(i-10);
            this.state.squares[i-10] = '*';
            this.state.squaris[i-10] = '*';
            this.state.winnir++;
          }
      }

      //elementos centrales
      if ((i > 9 && i < 17) || (i > 18 && i < 26) || (i > 27 && i < 35) || (i > 36 && i < 44) || (i > 45 && i < 53) || (i > 54 && i < 62) || (i > 63 && i < 71) ) 
      {
          if(this.state.squares[i-1] == 0)
          {
            this.queue.push(i-1);
            this.state.squares[i-1] = '*';
            this.state.squaris[i-1] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i+1] == 0)
          {
            this.queue.push(i+1);
            this.state.squares[i+1] = '*';
            this.state.squaris[i+1] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i-8] == 0)
          {
            this.queue.push(i-8);
            this.state.squares[i-8] = '*';
            this.state.squaris[i-8] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i-9] == 0)
          {
            this.queue.push(i-9);
            this.state.squares[i-9] = '*';
            this.state.squaris[i-9] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i-10] == 0)
          {
            this.queue.push(i-10);
            this.state.squares[i-10] = '*';
            this.state.squaris[i-10] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i+8] == 0)
          {
            this.queue.push(i+8);
            this.state.squares[i+8] = '*';
            this.state.squaris[i+8] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i+9] == 0)
          {
            this.queue.push(i+9);
            this.state.squares[i+9] = '*';
            this.state.squaris[i+9] = '*';
            this.state.winnir++;
          }

          if(this.state.squares[i+10] == 0)
          {
            this.queue.push(i+10);
            this.state.squares[i+10] = '*';
            this.state.squaris[i+10] = '*';
            this.state.winnir++;
          }
      }
      i = this.queue.shift();
      this.queui.push(i);
      i = this.queue[0];
    }

  }
  
  indices()
  {
    var aux=0;
    for (var i = 0; i < 10; i++) 
    {
      aux = BuscaMinas();
      while(this.state.indice.includes(aux))
      {
        aux = BuscaMinas();
      }
            
      this.state.indice[i] = aux;
    }
  }

  numerosCercanos()
  {
    var contMina=0;

    for (var j = 0; j < 10; j++) {
      for (var i = 0; i <= 80; i++) {
        if(i === this.state.indice[j])
        {
          this.state.squares[i] = 'X';
        }      
      }
    }

    for (var i = 0; i <= 80; i++) 
    {
      contMina=0;
      
      //Esquina superior izquierda
      if (i == 0) 
      {
        if(this.state.squares[i] != 'X')
        {
          if(this.state.squares[i+1] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[9] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[10] == 'X')
          {
            contMina++;
          }

          if(contMina != 0)
          {
            this.state.squares[i] = contMina;
          }
        }
      }
      //Esquina superior derecha
      if (i == 8) 
      {
        if(this.state.squares[i] != 'X')
        {
          if(this.state.squares[i-1] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[16] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[17] == 'X')
          {
            contMina++;
          }

          if(contMina != 0)
          {
            this.state.squares[i] = contMina;
          }
        }
      }
      //Esquina inferior izquierda
      if (i == 72) 
      {
        if(this.state.squares[i] != 'X')
        {
          if(this.state.squares[i+1] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[63] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[64] == 'X')
          {
            contMina++;
          }

          if(contMina != 0)
          {
            this.state.squares[i] = contMina;
          }
        }
      }
      //Esquina inferior izquierda
      if (i == 80) 
      {
        if(this.state.squares[i] != 'X')
        {
          if(this.state.squares[i-1] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[70] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[71] == 'X')
          {
            contMina++;
          }

          if(contMina != 0)
          {
            this.state.squares[i] = contMina;
          }
        }
      }

      //linea superior
      if (i > 0 && i < 8) 
      {
        if(this.state.squares[i] != 'X')
        {
          if(this.state.squares[i+1] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i-1] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i+8] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i+9] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i+10] == 'X')
          {
            contMina++;
          }

          if(contMina != 0)
          {
            this.state.squares[i] = contMina;
          }
        }
      }

      //linea izquierda
      if (i == 9 || i == 18 || i == 27 || i== 36 || i == 45 || i == 54 || i == 63) 
      {
        if(this.state.squares[i] != 'X')
        {
          if(this.state.squares[i+1] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i-9] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i-8] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i+9] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i+10] == 'X')
          {
            contMina++;
          }

          if(contMina != 0)
          {
            this.state.squares[i] = contMina;
          }
        }
      }

      //linea Derecha
      if (i == 17 || i == 26 || i== 35 || i == 44 || i == 53 || i == 62 || i == 71) 
      {
        if(this.state.squares[i] != 'X')
        {
          if(this.state.squares[i-1] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i-9] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i-10] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i+8] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i+9] == 'X')
          {
            contMina++;
          }

          if(contMina != 0)
          {
            this.state.squares[i] = contMina;
          }
        }
      }

      //linea Inferior
      if (i > 72 && i < 80) 
      {
        if(this.state.squares[i] != 'X')
        {
          if(this.state.squares[i-1] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i+1] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i-8] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i-9] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i-10] == 'X')
          {
            contMina++;
          }

          if(contMina != 0)
          {
            this.state.squares[i] = contMina;
          }
        }
      }

      //elementos centrales
      if ((i > 9 && i < 17) || (i > 18 && i < 26) || (i > 27 && i < 35) || (i > 36 && i < 44) || (i > 45 && i < 53) || (i > 54 && i < 62) || (i > 63 && i < 71) ) 
      {
        if(this.state.squares[i] != 'X')
        {
          if(this.state.squares[i-1] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i+1] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i-8] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i-9] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i-10] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i+8] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i+9] == 'X')
          {
            contMina++;
          }

          if(this.state.squares[i+10] == 'X')
          {
            contMina++;
          }

          if(contMina != 0)
          {
            this.state.squares[i] = contMina;
          }
        }
      }
    } 
    for (var ii = 0; ii <= 80; ii++) 
    {
        if (this.state.squares[ii] == 0) 
        {
          this.state.winner++;
        }
    }   
  }
  
  renderSquare(i) 
  {
      return (
        <Square
          value={this.state.squaris[i]} onClick={()=>this.handleClick(i)}
        />        
      );   
  }
  

  render() {
    if (this.state.bandera == 1) 
    {
      alert('Has Perdido');
      window.location.reload();
    }
    //alert('Has Ganado'+this.state.winnir+'mmmm'+this.state.winner);
    if (this.state.winner > 0 && this.state.winnir == this.state.winner) 
    {
      alert('Has Ganado');
      window.location.reload();
    }
    return (
      <div>
        <div>BUSCAMINAS</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="board-row">
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
        </div>
        <div className="board-row">
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
        </div>
        <div className="board-row">
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
        </div>
        <div className="board-row">
          {this.renderSquare(36)}
          {this.renderSquare(37)}
          {this.renderSquare(38)}
          {this.renderSquare(39)}
          {this.renderSquare(40)}
          {this.renderSquare(41)}
          {this.renderSquare(42)}
          {this.renderSquare(43)}
          {this.renderSquare(44)}
        </div>
        <div className="board-row">
          {this.renderSquare(45)}
          {this.renderSquare(46)}
          {this.renderSquare(47)}
          {this.renderSquare(48)}
          {this.renderSquare(49)}
          {this.renderSquare(50)}
          {this.renderSquare(51)}
          {this.renderSquare(52)}
          {this.renderSquare(53)}
        </div>
        <div className="board-row">
          {this.renderSquare(54)}
          {this.renderSquare(55)}
          {this.renderSquare(56)}
          {this.renderSquare(57)}
          {this.renderSquare(58)}
          {this.renderSquare(59)}
          {this.renderSquare(60)}
          {this.renderSquare(61)}
          {this.renderSquare(62)}
        </div>
        <div className="board-row">
          {this.renderSquare(63)}
          {this.renderSquare(64)}
          {this.renderSquare(65)}
          {this.renderSquare(66)}
          {this.renderSquare(67)}
          {this.renderSquare(68)}
          {this.renderSquare(69)}
          {this.renderSquare(70)}
          {this.renderSquare(71)}
        </div>
        <div className="board-row">
          {this.renderSquare(72)}
          {this.renderSquare(73)}
          {this.renderSquare(74)}
          {this.renderSquare(75)}
          {this.renderSquare(76)}
          {this.renderSquare(77)}
          {this.renderSquare(78)}
          {this.renderSquare(79)}
          {this.renderSquare(80)}          
        </div>
      </div>
    );
  }
}

function BuscaMinas(){
  var min = 0;
  var max = 80;
  var rand =  Math.floor(Math.random() * (max - min + 1) + min);

  return rand;
}


export default Board;
