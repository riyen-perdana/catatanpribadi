import React from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Data from "./components/Data";
import { getInitialData } from './utils/index';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      datas: getInitialData()
    }

    this.onAddDataEventHandler = this.onAddDataEventHandler.bind(this)
    this.onDeleteHandler = this.onDeleteHandler.bind(this)

  }

  onAddDataEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        datas: [
          ...prevState.datas,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toDateString(),
            archived: false,
          }
        ]
      }
    })
  }

  onDeleteHandler(id) {
    const datas = this.state.datas.filter(data => data.id !== id)
    this.setState(datas)
  }

  render() {

    return(
      <React.Fragment>
        <Header />
        <InputForm addCatatan={this.onAddDataEventHandler} />
        <Data onDelete={this.onDeleteHandler} allData={this.state.datas} />
      </React.Fragment>
    )
  }
}

export default App