import React, { useState } from 'react'

function MyMode() {
    const [mode, setMode]=useState('black');
    let changer=mode=='black' ? 'white' : 'black';
    const handle=()=>{
        setMode(changer);
    }
  return (
    <div style={{backgroundColor: mode, height: '100vh'}}>
        <button onClick={handle}>{changer === 'black'? '☀light' : ' ☾dark'}</button>
        <pre>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex autem corrupti 
          voluptatem numquam sapiente mollitia incidunt delectus distinctio,
             sed, fugit nostrum quae quo fugiat. Reiciendis nesciunt quidem dolor 
             perferendis tempore?</pre>
    </div>
  )
}

export default MyMode