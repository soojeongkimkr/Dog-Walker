import { action, createReducer } from 'typesafe-actions';
import {db} from '../../shared/firebase'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'
import { createImportSpecifier } from 'typescript';

// firebase 데이터 제어하는 훅들
const WRITE = "WRITE" as const;
const READ = "READ" as const;

interface Post {
  userId: string,
  date: string,
  img: [],
  title: string,
  text: string
}

//액션 생성 함수
const write = (post:Post) => action(WRITE, (post:Post)=> ({post}));
const read = (post:Post) => action(READ, (post:Post)=> ({post}));

const actionCreator = {
    write,
    read,
}


const initialState = {
    post: {
        userId: "",
        date: "",
        img: [],
        title: "",
        text: ""
    }
}

//비동기 액션 생성
export const writePostDB = (data:Post) => {
    return async function (dispatch: (arg0: any) => void){
        const docRef = await addDoc(collection(db, 'dogwalker'), data)
        console.log(docRef)
        const post_data = {id: docRef.id, ...data}

        dispatch(write(post_data))
     }
}

//리듀서

export default createReducer(initialState,{
    [WRITE]: (state, {payload}) => ({
        ...state,
        post: payload.post,
    }),
})


