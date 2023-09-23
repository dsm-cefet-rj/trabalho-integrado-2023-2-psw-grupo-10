import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="col-100 footer">
                    <div className="content">
                        <div className="col-4">
                            <h3><b>Populr Post</b></h3>
                            <p>Lorem Ipsum is simply dummy text of the printing.</p>
                            <p className="clock">25-September 2013</p>
                            <p>Lorem Ipsum is simply dummy text of the printing.</p>
                            <p className="clock">25-September 2013</p>
                        </div>
                        <div className="col-4">
                            <h3><b>Tags</b></h3>
                            <p>apps blog blogroll christmas cms coda concert daily design develop dialog drinks envato food fun gallery gift holiday icon illustration ipad iphone journal jquery label link marketing mobile motion music photo profession quotation recipes show sound strategy tv typography video</p>
                        </div>
                        <div className="col-4">
                            <h3><b>A little about us</b></h3>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                            </p>
                        </div>
                        <div className="col-4">
                            <h3><b>Get in touch</b></h3>
                            <p>
                                Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                            </p>
                            <p className="local">Texas, US</p>
                            <p className="emailico">email@email.com</p>
                            <p className="telefoneico">890-09880-45590</p>
                        </div>
                    </div>
                </div>
            
                <div className="col-100 footer-2">
          <div className="content">
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            </p>
          </div>
        </div>
            
            </footer>
        
        );
    }
}

export default Footer;
