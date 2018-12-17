// build and configure a view element
// let clockElement = document.createElement("h2");
// clockElement.id = "clock";

// // initialize the biz
// let curTime = new Date();
// clockElement.innerText = curTime.toLocaleTimeString();
// console.dir(clockElement);
// // insert into DOM
// ;
// console.dir(document);
// document.body.appendChild(clockElement);

// setInterval(function(){
//     curTime = new Date();
//     clockElement.innerText = curTime.toLocaleTimeString();
// },1000);

// AS A CLASS

// class ClockElement
// {
//     constructor(elementIdName="clock"){
//         this._targetElementName = elementIdName;
//         this._time = Date.now().toLocaleString();
//         this._element = document.createElement("h2");
//         this._element.id = this._targetElementName;
//         this._element.innerText = this._time;
//         document.body.appendChild(this._element);
//     }

//     run()
//     {
//         let self = this;
//         setInterval(function(){
//             self._time = Date.now().toLocaleString();
//             document.getElementById(self._targetElementName).innerText = self._time;
//         },1000);
//     }
// };

// let rob = new ClockElement();
// rob.run();

const e = React.createElement;

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time : new Date().toLocaleString()
        }
    }

    render() {
        return e(
            'h2',
            null,
            `${this.state.time}`
        )
    }
    // render() {
    //     return (
    //         <h2>
    //         {this.state.time}
    //         </h2>
    //     )
    // }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                time: new Date().toLocaleString()
            })
            , 1000
        }); 
    }
}

const domContainer = document.querySelector('#clock_box');
ReactDOM.render(e(Clock), domContainer);