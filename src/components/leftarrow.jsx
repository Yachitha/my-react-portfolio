import React, {Component} from 'react'

export default class leftarrow extends Component{
    render() {
        return (
            <section className="frame-wrapper animate-fadeup">
                <div className="arrow-grid">
                    <img className="big-arrow" src={"assets/images/leftarrow.svg"} alt="big-arrow"/>
                    <img className="small-arrow" src={"assets/images/straightarrow.svg"} alt="small-arrow"/>
                </div>
            </section>
        )
    }
}
