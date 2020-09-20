import React,{MouseEvent,ChangeEvent} from 'react';

// export const callback = (): number => {
//     alert('hey')
//     return 12;
// }
// window.setTimeout(callback, 100)

export const User = () => {

    const deliteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }
    const onNameChanged = () => {
        console.log('name chenged');
    }
    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log('age change: '+event.currentTarget.value);
        
    }
    const focusLostHandler = () => {
        console.log('name chenged');
    }

    return <div><textarea onBlur={focusLostHandler} onChange={onNameChanged}>Dimych</textarea>
    <input onChange={onAgeChanged} type={'number'}/>
        <button name='delite' onClick={deliteUser}>delite</button>
    </div>
}