import React, {Component} from 'react'

export default class currentjob extends Component{
    render() {
        return (
            <section className="frame-wrapper mb-50 animate-fadeup">
                <div className="two-column-grid__fixed">
                    <div className="grid-item image-container">
                        <img className="max-limit" src={"assets/images/job.svg"} alt=""/>
                    </div>
                    <div className="grid-item">
                        <div className="mb-25">
                            <h3>Current Role</h3>
                        </div>
                        <p className="mb-10">As a final year student I'm working on my Research Project in these days. Which
                            is really hard and focusing on it.</p>
                        <p>Still I'm and undergraduate. Now I'm the level that one semester behind to industry, ha haa.
                            Yeah, I want to do my best anyone who want to work with me.</p>
                    </div>
                </div>
            </section>
        )
    }
}
