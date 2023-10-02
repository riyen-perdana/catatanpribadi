import React from "react"

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            body : ''
        }

        this.onJudulChangeEventHandler = this.onJudulChangeEventHandler.bind(this)
        this.onCatatanChangeEventHandler = this.onCatatanChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)


    }

    onJudulChangeEventHandler(event) {
        this.setState(()=> {
            return {
                title : event.target.value
            }            
        })
    }

    onCatatanChangeEventHandler(event) {
        this.setState(()=> {
            return {
                body : event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addCatatan(this.state);
    }

    render() {
        return(
            <div className="note-app__body">
                <form onSubmit={this.onSubmitEventHandler}>
                    <div className="note-input__body">
                        <div className="note-input">
                            <h2>Masukkan Catatan Pribadi</h2>
                            <input type="text" placeholder="Ini Adalah Judul.." value={this.state.title} onChange={this.onJudulChangeEventHandler} />
                            <textarea rows="10" placeholder="Tuliskan Catatanmu Disini..." value={this.state.body} onChange={this.onCatatanChangeEventHandler}  />
                            <button type="submit">Tambah</button>
                        </div>                    
                    </div>
                </form>
            </div>
        )
    }
}

export default InputForm