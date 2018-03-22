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

class Share extends React.Component {
  state = {
    show: false
  }

  mouseEnter = () => {
    this.setState({show: true})
  }
  
  mouseLeave = () => {
    this.setState({show: false})
  }

  render() {
    return (
      <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <div style={{
          width: '34px',
          height: '34px',
          border: '1px solid #f0f0f0',
          borderRadius: '50%',
          textAlign: 'center',
          cursor: 'pointer',
          fontSize: '18px',
          float: 'left',
          marginRight: '8px'
        }}
        >
          <TiArroForward />
        </div>
        {this.state.show && 
          <div>
            <ul className="list-inline">
              <li className="list-inline-item">
                <FacebookShareButton url="http://127.0.0.210:3000/">
                  <FacebookIcon size={34} round={true} />
                </FacebookShareButton>
              </li>

              <li className="list-inline-item">
                <TwitterShareButton url="http://127.0.0.210:3000/">
                  <TwitterIcon size={34} round={true}></TwitterIcon>
                </TwitterShareButton>  
              </li>
              <li className="list-inline-item">
                <LinkedinShareButton url="http://127.0.0.210:3000/">
                  <LinkedinIcon size={34} round={true}></LinkedinIcon>
                </LinkedinShareButton>
              </li>
            </ul>
          </div>
        }
      </div>
    );
  }
}

export default Share;
