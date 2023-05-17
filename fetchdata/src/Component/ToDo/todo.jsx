import { useState,useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import Olist from './olist';
export default function List(){
    const [work,setWork] = useState('');
    const [items,setItems] = useState([]);
    const [theme,setTheme] = useState('light-theme');
    function mode(){
        theme === 'dark-theme' ?  setTheme('light-theme') : setTheme('dark-theme');
    };
    useEffect(()=>{
        document.body.className = theme;
    },[theme]);
    function Add(event){
        const value = event.target.value;
        setWork(value);
    };
    const Remove=(id)=>{
        console.log(id);
        setItems((old)=>{
            // console.log(old);
            old.filter((index)=>{
                return index!==id;
            })
        });
    }
    const Call=(event)=>{
        event.preventDefault();
        if(!document.getElementById('aditem').value ){
            alert('Sorry,empty field not allow!');
        }
        else{
            setItems((aryitem)=>{
                return[...aryitem,work];
            });
            setWork('');
        }
    }
    return (
        <>
            <div className="d1">
                <div className="d2"> To Do List </div>
                <input type={'text'} 
                       placeholder='Type Your Task'
                       name='task'
                       id="aditem"
                       value={work || ''}
                       onChange={Add}
                       /> 
                <Button onClick={Call}><AddIcon fontSize="large"/></Button>
                <div className="d3"> 
                    <ol>
                        {items.map((itvalue,index)=>{
                            return(
                                <>
                                    <Olist text={itvalue} id={index} index={index} onSelect={()=>Remove(index)}/>
                                </>
                            )
                        })}
                    </ol>
                </div>
                {theme === 'dark-theme'? 
                    <Button><ToggleOnIcon fontSize="large" className='btn-on' onClick={()=>{mode()}}/></Button> :
                    <Button><ToggleOffIcon fontSize="large" className='btn-off' onClick={()=>{mode()}}/></Button>
                }
            </div>
        </>
    );
}