import React, {Component} from 'react'

export default class experience extends Component{
    render () {
        return (
            <section className="frame-wrapper mb-100">
                <div className="two-column-grid__fluid">
                    <div className="grid-item centered wrap-grid animate-fadeup">
                        <div className="stack-card" title="HTML5">
                            <img src={"assets/images/html5.svg"} alt="html5"/>
                        </div>
                        <div className="stack-card" title="CSS3">
                            <img src={"assets/images/css.svg"} alt="css"/>
                        </div>
                        <div className="stack-card" title="SASS">
                            <img src={"assets/images/sass.svg"} alt="sass"/>
                        </div>
                        <div className="stack-card" title="Javascript">
                            <img src={"assets/images/javascript.svg"} alt="javascript"/>
                        </div>
                        <div className="stack-card" title="React/ReactNative">
                            <img src={"assets/images/react.svg"} alt="react-native"/>
                        </div>
                        <div className="stack-card" title="npm">
                            <img src={"assets/images/npm.svg"} alt="npm"/>
                        </div>
                        <div className="stack-card" title="Webpack">
                            <img src={"assets/images/webpack.svg"} alt="webpack"/>
                        </div>
                        <div className="stack-card" title="Github">
                            <img src={"assets/images/github.svg"} alt="github"/>
                        </div>
                        <div className="stack-card" title="Hybrid Apps">
                            <img src={"assets/images/hybrid.png"} alt="hybrid"/>
                        </div>
                    </div>
                    <div className="grid-item fixed-grid__column animate-fadeup">
                        <div className="fixed-grid__row recognising-text mb-60">
                            <div className="dashed-box">

                            </div>
                            <div className="fixed-grid__row wrkng-txt">
                                <h1 className="primary-highlight__txt mr-45">3<span className="extra">+</span></h1>
                                <div className="fixed-grid__column align-left">
                                    <p className="secondary-highlight__txt">Years</p>
                                    <p className="secondary-highlight__txt">Working</p>
                                    <p className="secondary-highlight__txt">Experience </p>
                                </div>
                            </div>
                        </div>
                        <div className="fixed-grid__row recognising-text">
                            <div className="call-icon mr-20">
                                <img src={"assets/images/call.png"} alt="call"/>
                            </div>
                            <div className="fixed-grid__column align-left">
                                <h5 className="call-txt__header mb-5">Call Me Now</h5>
                                <h3 className="call-txt">(+91)-123-456-7890</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
