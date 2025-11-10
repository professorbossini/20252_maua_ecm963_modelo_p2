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
        //adicione o veículo
        //state.
        ////////////////////////////////////////////////////////////
      },
      prepare: (marca: string, modelo: string, ano: number) => ({
        ////////////////////////////////////////////////////////////
        // associe um objeto com id, marca, modelo e ano ao payload
        //o id deve ser produzido pela função nanoid
        // payload: 
        ////////////////////////////////////////////////////////////
      }),
    },
    atualizar: (state, action: PayloadAction<Veiculo>) => {
      ////////////////////////////////////////////////////////////
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
      //use a função filter para remover, atualizando a lista
      ////////////////////////////////////////////////////////////
      // state.lista = 
    },
  },
});

////////////////////////////////////////////////////////////
//extraia as funções adicionar, atualizar e rmeover do slice
////////////////////////////////////////////////////////////
// const { adicionar, atualizar, remover } = 





////////////////////////////////////////////////////////////
// configure o store
// const store =
////////////////////////////////////////////////////////////
