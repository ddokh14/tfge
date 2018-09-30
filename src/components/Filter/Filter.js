import React, {Component} from 'react'
import './Filter.css'
import Flag from './flag.svg'
import AutoInput from '../../containers/AutoInput/AutoInput';

class Filter extends Component {

    constructor(){
        super();
        //constants for label names/images
        this.flagLabel = <img className="flag" alt="flag" src={Flag}></img>;
        this.pickUpLabel = "Pick-Up";
        this.dropOffLabel = "Drop-Off";
        this.id = 0;
        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.state = {
            locations: []
        }
    }

    onAdd(){
        console.log("prev: ",this.state.locations);
        this.setState({
            locations: [...this.state.locations, {id: this.id, loc: ""}]
        })
        this.id++;
        console.log("next: ",this.state.locations);
    }
    onRemove(event){
        console.log("removing", event.currentTarget.id);
        const filteredLocations = this.state.locations.filter(
            location =>
                !(parseInt(location.id,10) === parseInt(event.currentTarget.id,10))
        );
        console.log("FILTERED", filteredLocations);
        this.setState({
            locations: filteredLocations
        });
        console.log(this.state.locations);
    }

    render(){
        return(
            <div className="filter">
                <AutoInput label={this.pickUpLabel}/>
                {this.state.locations.map(location => 
                    <AutoInput key={location.id} id={location.id} label={this.flagLabel} handleRemove={this.onRemove} removable={true}/>
                )}
                <AutoInput canAdd={true} label={this.dropOffLabel} handleAdd={this.onAdd}/>
            </div>
        );
    }
}

export default Filter;