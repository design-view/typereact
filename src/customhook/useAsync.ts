import React, { useReducer, useEffect } from 'react'
// 상태를 위한 타입
export interface SubjectdataType {
    id: number;
    name: string;
}
export interface ListdataType {
    id: number;
    subject: number;
    w_name: string;
    w_type: string;
    w_syntex: string;
    w_desc: string;
}
export type State = {
    loading: boolean;
    data: null | SubjectdataType[] | ListdataType[];
    error: null | object;
};

// 모든 액션들을 위한 타입
type Action = { type: 'LOADING' }
    | { type: 'SUCCESS'; data: SubjectdataType[] | ListdataType[] }
    | { type: 'ERROR'; error: any }

// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정
//   type SampleDispatch = Dispatch<Action>;
//LOADING, SUCCESS, ERROR
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null,
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error,
            };
        default:
            return state;
    }
}

//callback은 api호출하는 함수 deps는 값이 변경되었을때
//특정버튼을 누를때만 동작하도록 세번째 속성을 후가
type fetch = () => void;
const useAsync = (callback: any, deps = [], skip = false): [State, fetch] => {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });

    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const data = await callback();
            dispatch({ type: 'SUCCESS', data })
        } catch (error) {
            dispatch({ type: 'ERROR', error })
        }
    }

    useEffect(() => {
        //skip이 true라면 리턴
        if (skip) {
            return;
        }
        fetchData();
        // esline-disable-next-line
    }, deps)
    return [state, fetchData];
}

export default useAsync;


