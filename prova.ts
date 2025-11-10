import { configureStore, createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Veiculo {
  id: string;
  marca: string;
  modelo: string;
  ano: number;
}

interface EstadoVeiculos {
  lista: Veiculo[];
}

////////////////////////////////////////////////////////////
//EXERCÍCIO 1
//crie o estado inicial
//o nome da constante deve ser estadoInicial
//seu tipo deve ser EstadoVeiculos
//ele deve ser um objeto contendo uma variavel chamada lista
//const estadoInicial = 
////////////////////////////////////////////////////////////


const veiculosSlice = createSlice({
  name: "veiculos",
  initialState: estadoInicial,
  reducers: {
    adicionar: {
      reducer: (state, action: PayloadAction<Veiculo>) => {
        ////////////////////////////////////////////////////////////
        //EXERCÍCIO 2
        //adicione o veículo
        //state.
        ////////////////////////////////////////////////////////////
      },
      prepare: (marca: string, modelo: string, ano: number) => ({
        ////////////////////////////////////////////////////////////
        //EXERCÍCIO 3
        // associe um objeto com id, marca, modelo e ano ao payload
        //o id deve ser produzido pela função nanoid
        // payload: 
        ////////////////////////////////////////////////////////////
      }),
    },
    atualizar: (state, action: PayloadAction<Veiculo>) => {
      ////////////////////////////////////////////////////////////
      //EXERCÍCIO 4
      //use a função findIndex para encontrar o veiculo a ser atualizado
      //guarde o valor encontrado na variável i
      // const i
      //use um if para verificar se o veiculo foi encontrado
      //em caso positivo, atualize
      //if
      ////////////////////////////////////////////////////////////
    },
    remover: (state, action: PayloadAction<string>) => {
      ////////////////////////////////////////////////////////////
      //EXERCÍCIO 5
      //use a função filter para remover, atualizando a lista
      ////////////////////////////////////////////////////////////
      // state.lista = 
    },
  },
});

////////////////////////////////////////////////////////////
//EXERCÍCIO 6
//extraia as funções adicionar, atualizar e rmeover do slice
////////////////////////////////////////////////////////////
// const { adicionar, atualizar, remover } = 
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
//EXERCÍCIO 7
// configure o store
// const store =
////////////////////////////////////////////////////////////
