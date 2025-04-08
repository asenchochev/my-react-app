import { useState } from "react";

export default function usePersistedStorage (key, initialValue) {
    const [state,setState] = useState(()=> {
        const persistedState = localStorage.getItem(key);

        if(persistedState){
            return JSON.parse(persistedState);
        }

        return initialValue;
    });

    const setPersistedState = (value) => {
        setState(value);

        let serializedResult;

        if(typeof value === 'function'){
            serializedResult = JSON.stringify(value(state))
        }else {
            serializedResult = JSON.stringify(value)
        }

        localStorage.setItem(key,serializedResult)
    }

    return [
        state,
        setPersistedState
    ]
}