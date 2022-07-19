import { Ganare } from "../Ganare";
import { SongModel } from "../SongModel";


// export default interface stateModel {
//     songs : SongModel[];
// }

type Action =
    | { type: "GET_ALL_SONGS", payload: SongModel[] }
    | { type: "CREATE_SONG", payload: SongModel }
    | { type: "DELETE_SONG", payload: string }
    | { type: "SET_SONG", payload: any }
    | { type: "GET_BY_ARTIST", payload: SongModel[] }
    
const initialization =
{
    songs:[],
};

export const reducer = (state = initialization, action : Action) => 
{
    switch(action.type) {
        case 'GET_ALL_SONGS':
            return {...state,songs: action.payload};
            // console.log(state.songs)
            // return {...state};
        case 'GET_BY_ARTIST':
            return {...state,songs: action.payload}
        case 'SET_SONG':
            // const songsList = state.songs.map((s : any) => s.id === action.payload.id?
            //     (s = action.payload) : (s = s)
            // );
            // return songsList;    
            return { ...state, listSong: state.songs.filter((editSong: SongModel) => editSong.id !== action.payload.id) }

        case 'DELETE_SONG':
            state.songs = state.songs.filter((s : SongModel) => s.id !== action.payload)
             return {...state}

        case 'CREATE_SONG':
            // state.songs = [...state.songs, action.payload];
            // return {...state}
            return { ...state, songs:  action.payload }
        default  :return {...state}

    }
    
}

export default reducer;

