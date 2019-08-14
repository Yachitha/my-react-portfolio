import React, {Component} from 'react'

export default class rightarrow extends Component{
    render() {
        return (
            <section className="frame-wrapper animate-fadeup">
                <div className="arrow-grid">
                    <img className="big-arrow" src={"assets/images/rightarrow.svg"} alt="rightarrow"/>
                    <img className="small-arrow" src={"assets/images/straightarrow.svg"} alt="small"/>
                </div>
            </section>
        )
    }
}
