import React, {Component} from 'react'

export default class freelancing extends Component{
    render() {
        return (
            <section className="frame-wrapper animate-fadeup">
                <div className="two-column-grid__fixed--reverse">
                    <div className="grid-item">
                        <div className="mb-25">
                            <h3 className="txt-align__right">Volunteering & Freelancing</h3>
                        </div>
                        <p className="txt-justify mb-10">As an undergraduate I got opportunities to conduct Networking sessions
                            to A/L ICT students, Under the INTECS outreach programs. I was an official member of company coordination in the FIT career fair
                            in 2018 january. I was a team member of FIT career fair website upgrade committee in the year of 2019/20.</p>
                        <p className="txt-justify">I had worked with some external projects to earn some bucks for my
                            educational purposes.</p>
                    </div>
                    <div className="grid-item image-container">
                        <img className="max-limit" src={"assets/images/freelancer.svg"} alt="freelancer"/>
                    </div>
                </div>
            </section>
        )
    }
}
