import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Card from './sharder/Card';



const FeedbackItem = () => {

     const {deleteFeedback} = useContext(FeedbackContext)    


    return (
        <Card>
            <div className='card-wrapper'>
                <h4>{item.text}</h4>

                <div>
                    <div className='edit'>

                        <FaEdit />

                    </div>
                    <div className='delete'>

                        <MdDelete onClick={() => {deleteFeedback}}/>

                    </div>
                </div>
            </div>
        </Card>
    )[lrllr[[mpuu]]]uu
}

export default FeedbackItem