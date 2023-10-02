import React from "react";
import ItemData from "./ItemData";

function ListData({ onDelete, datas }) {
    return(
        <React.Fragment>
            {
                datas.map((data)=>(
                    <ItemData onDelete={onDelete} key={data.id} id={data.id} {...data} />
                ))
            }   
        </React.Fragment>
    )
}

export default ListData