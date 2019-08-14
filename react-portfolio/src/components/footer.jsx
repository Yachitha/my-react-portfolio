/* eslint-disable jsx-a11y/anchor-has-content */
import React, {Component} from 'react'

export default class footer extends Component{
    render() {
        return (
            <footer className="animate-fadeup">
                <section className="footer-details">
                    <h3 className="footer-header">Follow Me</h3>
                    <ul className="footer-following">
                        <li className="following-item"><a href={"https://www.linkedin.com/in/yachitha-sandaruwan-260185b5/"} title="linkedin" target={"_blank"}><i className="fa fa-linkedin-square"
    aria-hidden="true"/></a></li>
                        <li className="following-item"><a href={"https://github.com/Yachitha"} title="github" target={"_blank"}><i className="fa fa-github-square"
    aria-hidden="true"/></a></li>
                        <li className="following-item"><a href={"https://medium.com/@yachithasandaruwan"} title="medium" target={"_blank"}><i className="fa fa-medium"
    aria-hidden="true"/></a></li>
                        <li className="following-item"><a href={"https://www.facebook.com/profile.php?id=100007260226315"} title="facebook" target={"_blank"}><i className="fa fa-facebook-square"
    aria-hidden="true"/></a></li>
                    </ul>
                    <div className="developed-by">Copyright ©2019 All rights reserved @Yachitha Sandaruwan</div>
                </section>
            </footer>
        )
    }
}
