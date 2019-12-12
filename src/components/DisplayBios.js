import React, { Component} from 'react';
import Bio from './Bio';
import { connect} from 'react-redux'
import devActions from '../reducers/devBios';

class DisplayBios extends Component {
    
    render(){
        const {
            developers = []
        } = this.props
    return(
       developers.map((d) =>  <Bio key={d.id} developer={d} />
            )
            
    );
}   
}

export default connect(({developers}) => ({
    developers : developers
}),{
    fetchDevelopers : devActions.getAllBiosActionCreators
})(DisplayBios);