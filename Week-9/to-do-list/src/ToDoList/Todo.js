import react, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Todo.css'

toast.configure();

export const Todo = () => {

    const [inputItem, setInputItem] = useState('');
    const [itemsArray, setItemsArray] = useState(['Buy Mengo', 'Buy Orange', 'Complete Assignments']);

    const ItemEvent = (event) => {

        setInputItem(event.target.value);

    }

    const insertItem = () => {
        if (inputItem === null || inputItem === '') {

            toast.error('Can not Insert Empty ToDo Item', { autoClose: 2000 })

        }
        else {

            setItemsArray((olditems) => {

                return [...olditems, inputItem];
            });

            toast.info('ToDo item added Succesfully', { autoClose: 1000 })


        }


        setInputItem('');

    }

    const delteItem = (id) => {

        setItemsArray((olditems) => {

            return olditems.filter((itemsArray, index) => {
                return index !== id
            });

        })

        toast.warning('ToDo item Deleted Succesfully', { autoClose: 1000 })


    }



    return (
        <>

            <div className='main-div'>
                <div className='todo-div'>
                    <h1>ToDo List</h1>
                    <div className='Add item'>
                        <input type="text" placeholder="Add a item" value={inputItem} onChange={ItemEvent}></input>
                        <button onClick={insertItem}> + </button>
                    </div>

                    <ol>
                        {
                            itemsArray.map((value, index) => {
                                return <List item={value} key={index} id={index} onSelect={delteItem} />
                            })
                        }
                    </ol>
                </div>

            </div>

        </>
    )

}


export const List = (props) => {
    return (
        <>
            <div className='todo-list'>
                <button className='button-delete' onClick={() => {
                    props.onSelect(props.id)
                }}>x</button>
                <li>{props.item}</li>
            </div>
        </>
    )
}


// export default all;