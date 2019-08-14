import React, {Component} from 'react'

export default class myself extends Component{
    render() {
        return (
            <section className="frame-wrapper mb-50">
                <div className="two-column-grid__fixed">
                    <div className="grid-item image-container animate-fadeup">
                        <img src={"assets/images/profile.svg"} alt="profile"/>
                    </div>
                    <div className="grid-item">
                        <div className="mb-25">
                            <h3 className="fade-up">Myself</h3>
                        </div>
                        <p className="mb-10 animate-fadeup">Hey, so you know my name and what I'm Passionate about. I'm the
                        second of my family, I have one elder sister. Being with my family is one of my favorite.</p>
                        <p className="animate-fadeup">So, yeah I have some hobbies. Simply I love to play games, watch movies and
                        reading.</p>
                    </div>
                </div>
            </section>
        )
    }
}
