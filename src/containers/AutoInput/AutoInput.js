import React , {Component} from 'react';
import './AutoInput.css';
import Point from './point.svg'


const cities = [
    { id:0, name:"Tbilisi" },
    { id:1, name:"Kutaisi" },
    { id:2, name:"Batumi" },
    { id:3, name:"Gori" },
    { id:4, name:"Foti" },
    { id:5, name:"Ambrolauri" },
    { id:6, name:"Tbilisi" },
    { id:7, name:"Tbilisi" },
    { id:8, name:"Tbilisi" },
    { id:9, name:"Tbilisi" }
]

class AutoInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            fileteredCities: cities,
            visible: false
        }
        this.onChange = this.onChange.bind(this);
        this.menuExpanded = this.menuExpanded.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        this.input.value = event.currentTarget.attributes.getNamedItem("name").value;
        this.setState({ visible: false, fileteredCities: cities }, () => {
            document.removeEventListener('click', this.closeMenu);
        }); 
    }

    onChange(event) {
        const userInput = event.currentTarget.value;
        const fileteredCities = cities.filter(
          suggestion =>
            suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        this.setState({
            fileteredCities
        });
    }

    menuExpanded() {
        this.setState({ visible: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
      
    closeMenu(event) {
        if (!this.suggests.contains(event.target)) {
          this.setState({ visible: false }, () => {
            document.removeEventListener('click', this.closeMenu);
          });  
        }
      }

    render() {
        return(
            <div className="auto-input" ref={(element) => {this.suggests = element;}}>
                <label className="auto-input-lbl">{this.props.label}</label>
                <input className="auto-input-inp" ref={(element) => {this.input = element;}} onClick={this.menuExpanded} onChange={this.onChange}></input>
                {
                this.state.visible
                    ? 
                    (
                    <div className="suggests">
                            {
                            this.state.fileteredCities.length 
                            ?
                            <ul className="suggests-list">
                                {this.state.fileteredCities.map(city => 
                                    <li key={city.id} className="suggests-item" name={city.name} id={city.id} onClick={this.onClick}>
                                        <img alt="point" src={Point}></img>
                                        {city.name}
                                    </li>
                                )}
                            </ul>
                            :
                            <p className="not-found">No location found</p>   
                            }
                    </div>
                    )
                    : 
                    (
                    null
                    )
                }
            </div>
        );
    }
}

export default AutoInput;