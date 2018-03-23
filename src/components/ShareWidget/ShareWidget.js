import React from 'react';
import TiArroForward from 'react-icons/lib/ti/arrow-forward';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,

  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share';

import './ShareWidget.css';

class ShareWidget extends React.Component {
  state = {
    show: this.props.showDefault || false
  }

  mouseEnter = () => {
    this.setState({show: true})
  }
  
  mouseLeave = () => {
    if(!this.props.showDefault) {
      this.setState({show: false})
    }
  }

  render() {
    const { url } = this.props;
    const { show } = this.state;
    return (
      <div 
        className="ShareWidget"
        onMouseLeave={this.mouseLeave}
      >
        <div className="ShareIcon"
          onMouseEnter={this.mouseEnter}
        >
          <TiArroForward />
        </div>
        <div className={show ? "ShowShareButtons" : "HideShareButtons"}>
          <ul className="inline-list">
            <li className="inline-item">
              <FacebookShareButton url={url}>
                <FacebookIcon size={34} round={true} />
              </FacebookShareButton>
            </li>

            <li className="inline-item">
              <TwitterShareButton url={url}>
                <TwitterIcon size={34} round={true}></TwitterIcon>
              </TwitterShareButton>
            </li>
            <li className="inline-item">
              <LinkedinShareButton url={url}>
                <LinkedinIcon size={34} round={true}></LinkedinIcon>
              </LinkedinShareButton>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export { ShareWidget };
