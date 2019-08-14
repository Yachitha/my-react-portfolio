import React, {Component} from 'react'

export default class introduction extends Component{
    render() {
        return (
            <section className="frame-wrapper ptb-100">
                <div className="two-column-grid__fluid">
                    <div className="grid-item">
                        <div className="normal-grid__column mb-25">
                            <h4 className="fade-up">Hello</h4>
                            <div className="line-helper fade-up">

                            </div>
                        </div>
                        <div className="mb-25">
                            <h1 className="fade-up"><span>I am</span> Yachitha Sandaruwan</h1>
                        </div>
                        <div className="mb-25">
                            <h4 className="fade-up">Developer and Tech Seeker</h4>
                        </div>
                        <div className="fade-up">
                            {/*<button className="primary-btn mr-15">Primary</button>*/}
                            <button className="secondary-btn">View My CV</button>
                        </div>
                        <div className="highlighter-container fade-up">
                            <h1 className="highlighter">Yachitha</h1>
                            <div className="box-highlighter">

                            </div>
                        </div>
                    </div>
                    <div className="grid-item image-container fade-up">
                        <img className="header-image" src={"assets/images/developer.svg"} alt="developer"/>
                    </div>
                </div>
            </section>
        )
    }
}
