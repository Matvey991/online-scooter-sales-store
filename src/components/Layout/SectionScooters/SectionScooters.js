import { useEffect, useState } from 'react';
import { getLogit, getScooters } from '../../../helpers/api/api';

export const SectionScooters = () => {
    const [state, setState] = useState(null)
    const [stateLogin, setStateLogin] = useState('')
    const [statePassword, setStatePassword] = useState('')
    const [error, setError] = useState(false)

    useEffect(() => {
        getScooters().then((res) => setState(res))
    }, [])

    const funcLogin = () => {
        try {
            getLogit({username: stateLogin, password: statePassword}).then((res) => console.log(res))
        } catch (error) {
            setError(true)
        }

        setStateLogin('')
        setStatePassword('')
    }

    return (
        <div>
            {state ? state.map((el) => (
                <div key={el.id}>
                    <p>{el.name}</p>
                    <img src={el.image} alt='' style={{width: '100px', heigth: '100px'}}/>
                </div>
            )) : null}
            <button onClick={funcLogin}>click</button>
            <input value={stateLogin} onChange={(e) => setStateLogin(e.target.value)}/>
            <input value={statePassword} onChange={(e) => setStatePassword(e.target.value)}/>
            {error ? <h1>Ошибка</h1> : null}
        </div>
    );
};