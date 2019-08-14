import React, {Component} from 'react'

export default class schooling extends Component{
    render() {
        return (
            <section className="frame-wrapper animate-fadeup">
                <div className="two-column-grid__fixed--reverse">
                    <div className="grid-item">
                        <div className="mb-25">
                            <h3 className="txt-align__right">Schooling</h3>
                        </div>
                        <p className="txt-justify mb-10">I had my primary education from Upandanda College, Galle. From
                            grade 1 to 11 I have learnt from my first school. Most funniest thing is that I failed grade 5
                            Scholarship exam, I had put it there and move forward. I got 7As and 2Bs from my O/Ls. I was a
                            prefect of school prefect body. Had opportunity to working in school media unit and Art society.</p>
                        <p className="txt-justify">I got a fresh start to my A/Ls in Physical science stream by gain
                            admission to Richmond College, Galle. I had get A for combined-Mathematics, B for Physics
                            and B for Chemistry. I was a member of school science society.</p>
                    </div>
                    <div className="grid-item image-container">
                        <img className="max-limit" src={"assets/images/school.svg"} alt="schooling"/>
                    </div>
                </div>
            </section>
        )
    }
}
