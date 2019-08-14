import React, {Component} from 'react'

export default class college extends Component{
    render() {
        return (
            <section className="frame-wrapper mb-50 animate-fadeup">
                <div className="two-column-grid__fixed">
                    <div className="grid-item image-container">
                        <img className="max-limit" src={"assets/images/graduation.svg"} alt=""/>
                    </div>
                    <div className="grid-item">
                        <div className="mb-25">
                            <h3>University</h3>
                        </div>
                        <p className="mb-10">Now I'm an final year Undergraduate of University of Moratuwa, Faculty of
                            Information Technology.</p>
                        <p>Most coolest 4 years of time in my life reaching to end.</p>
                    </div>
                </div>
            </section>
        )
    }
}
