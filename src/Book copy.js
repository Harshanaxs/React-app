import React from 'react';
class Book extends React.Component {
    render() {
        return (
            <li key={this.props.key}>
                <div>
                 <h2>{this.props.title}</h2>
                 <p>{this.props.description}</p>
            </div>
            </li>
         )
    }
  }


export default Book ;