import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import ThemeContext from '../context/ThemeContext';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Card from './sharder/Card';

const FeedbackItem = ({item}) => {

    const { deleteFeedback, editItem} = useContext(FeedbackContext);
    const {darkMode} = useContext(ThemeContext);
  

    return (
        <div className={`app ${darkMode ? "dark " : ""}`}>
        <Card>

            <div className='card-wrapper'>
                 
                <h4>{item.text}</h4>
               

                <div>
                    <div className='edit'>
                        <FaEdit onClick={()=> editItem(item)}/>
                    </div>

                    <div className='delete'>
                        <MdDelete
                            onClick={() => deleteFeedback(item.id)}
                        />
                    </div>
                </div>
            </div>
  
           
        </Card>
        </div>
    );
};

export default FeedbackItem;