import React, { Component } from "react";
import Cell from "./Cell"

interface State {
  counter: number;
}

export class Toggler extends Component {
  state = {
    isChildrenVisible: true
  };

  onClick = () => {
    const { isChildrenVisible } = this.state;
    this.setState({
      isChildrenVisible: !isChildrenVisible,
    })
  }

  render() {
    const { isChildrenVisible } = this.state;
    const { children } = this.props;
    return (
      <>
        <button onClick={this.onClick}>{isChildrenVisible ? "Скрыть children" : "children"}</button>
        <br/>
        {isChildrenVisible && children}
      </>
    );
  }
}

const row = (y:number, xCount: number, clickMe: (x: number, y: number) => void) => {
  let x: number = 0;
  const mas_row = [];
  while (x < xCount) { 
    mas_row.push(<Cell width={40} height={40} key={`${x}_${y}`} x={x} y={y} clickMe={clickMe}>{`${x}_${y}`}</Cell>);
    x++; 
  }
  return mas_row;
}

class CellField extends Component<CellFieldProps, State> {
  state = {
    counter: this.props.initialValue || 0,
  };

  constructor(props: CellFieldProps) {
    super(props);
    this.state = {
      counter: props.initialValue || 0,
    };
    this.onClick = this.onClick.bind(this);
  }

  //здесь мы инициализируем первичные действия
  componentDidMount() {
      //здесь можно вызывать side-эффекты
      //подписываемся на событие клика мышкой
      document.addEventListener("click", this.documentOnClick)
  }

  documentOnClick = () => {
    console.log("documentonClick: Click!");
  }

  onClick = () => {
    this.setState({
      counter: this.state.counter + 1, 
    });
  };

  //lifeciclehook, который решает, надо ли нашему компоненту перерисоываться или нет
  shouldComponentUpdate(nextProps: CellFieldProps, nextState: State) {
    const c: boolean = nextState.counter % 5 == 0;
    c ? null : console.log(`shouldComponentUpdate: ${nextState.counter} % 5 != 0`);
    return c; 
  }

  componentDidUpdate() {
    if (this.state.counter % 10 == 0) {
      console.log(`componentDidUpdate: ${this.state.counter} % 10 == 0`);
      console.log("componentDidUpdate: Updated! this.state.counter + 2");
      this.setState({
        counter: this.state.counter + 2, 
      });
    }
    console.log(`state.counter =  ${this.state.counter}`); 
  }

  //lifeciclehook для высвобождения ресурсов, на которые был подписан ваш компонент
  //здесь нельзя делать setState
  componentWillUnmount() {
    document.removeEventListener("click", this.documentOnClick)
  }

  render() {
    const filed = []
    let y: number = 0;
    const { counter } = this.state;
    while(y < this.props.yCount) {
      filed.push(row(y, this.props.xCount, this.onClick));
      filed.push(<br key={`${y}`}/>);
      y++;
    }
    return (
    <> 
      {filed}
      <h2>Clicked: {counter}</h2>
    </>
    );
  }
};

export default CellField;