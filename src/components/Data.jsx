import React from "react";
import ListData from './ListData'

function Data ({ onDelete, allData }) {
    return(
        <React.Fragment>
            <div className="note-list__header">
                <h1>Data Catatan Pribadi</h1>
            </div>
            {
                allData.length !==0 ? <ListData onDelete={onDelete} datas={allData}/> : <p className="notes-list__empty-message">Tidak Ada Catatan</p>
            }
        </React.Fragment>
    )
}

export default Data