import React  from "react";
import {showFormattedDate} from '../utils/index'

function ItemData({ onDelete, id, title, body, createdAt}) {
    return(
        <React.Fragment>
            <div className="note-item">
                <div className="note-item__content">
                    <p className="note-item__title">{title}</p>
                    <p className="note-item__content">{body}</p>
                    <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                    <button onClick={() => onDelete(id)} className="note-item__delete-button">Delete</button>
                </div>
            </div>                        
        </React.Fragment>
    )
}

export default ItemData