import React from 'react'
import Camera from 'react-camera'
import { Menu, Icon, Typography, Steps, Button, Input } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { config } from '../config'

import classNames from 'classnames/bind'
import styles from './RegisterPage.scss'
import {networkUtils} from "../_services";
const cx = classNames.bind(styles);
const { Title } = Typography;
const { Step } = Steps;

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.videoTag = React.createRef();
    this.captureBtn = React.createRef();
    this.state = {
      current: '',
      recording: false,
      videos: [],
      inputValue: ''
    }
  }

  state = {
    loading: false,
    iconLoading: false,
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  async componentDidMount() {
    const stream = await navigator.mediaDevices.getUserMedia({audio: false, video: true});
    // show it to user
    this.video.src = window.URL.createObjectURL(stream);
    this.video.play();
    // init recording
    this.mediaRecorder = new MediaRecorder(stream);
    // init data storage for video chunks
    this.chunks = [];
    // listen for data from media recorder
    this.mediaRecorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) {
        this.chunks.push(e.data);
      }
    };
  }

  startRecording(e) {
    e.preventDefault();
    // wipe old data chunks
    this.chunks = [];
    // start recorder with 10ms buffer
    this.mediaRecorder.start(10);
    // say that we're recording
    this.setState({recording: true});
  }

  stopRecording(e) {
    e.preventDefault();
    // stop the recorder
    this.mediaRecorder.stop();
    // say that we're not recording
    this.setState({recording: false});
    // save the video to memory
    this.saveVideo();
  }

  saveVideo() {
    // convert saved chunks to blob
    const blob = new Blob(this.chunks, {type: 'video/mp4'});
    // generate video url from blob
    const videoURL = window.URL.createObjectURL(blob);
    // append videoURL to list of saved videos for rendering
    const videos = this.state.videos.concat([videoURL]);
    this.setState({videos});
  }

  deleteVideo(videoURL) {
    // filter out current videoURL from the list of saved videos
    const videos = this.state.videos.filter(a => a !== videoURL);
    this.setState({videos});
  }

  componentDidMount() {
    // getting access to webcam
    navigator.mediaDevices
      .getUserMedia({video: true})
      .then(stream => this.videoTag.current.srcObject = stream)
      .catch(console.log);
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  record_click() {
    this.startRecording(document.getElementsByClassName('btn-record'));
  }

  start_timer() {
    this.captureBtn.current.click();
  }

  takePicture = () => {
    let name = this.state.inputValue;
    let training = 0;

    //for (let i = 0; i < 30; i++) {
    //  if (i === 30) training = 1;
    this.camera.capture()
      .then(blob => {
        console.log(blob);
        let reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          let b64Image = reader.result;
          b64Image = b64Image.split(',')[1];
          let data = {
            name: name,
            b64video: b64Image,
            training: training
          };
          console.log(data);
          networkUtils.post('/api/family/register', JSON.stringify(data));
        };
      });

    //}
    this.start_timer();
  };

  render() {
    const {recording, videos} = this.state;
    return (
      <div className={cx('RegisterContainer')}>
        <div className={cx('top-wrapper')}>
          <img style={{ width: '100%' }}
               src={config.apiUrl + '/static/images/bg2.png'}
               alt='logo' />
          <div className={cx('text-wrapper')}>
            <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
            >
            </Camera>
            <Input placeholder='name' value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
            <Button type='primary' icon='camera' size='large'
                    onClick={this.takePicture} className={cx('btn-record')}
                    ref={this.captureBtn}>
              Record
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export const uploadImage = (fileObj) => dispatch => {
    return fetch('/api/family/register', {
        method: 'POST',
        headers: {
            'Accept': 'image/jpeg'
        },
        body: fileObj
    })
        .then((response) => response.json())
        .then(function (response) {
            if (response.status === 'success') {
                console.log(response);
                // ... Show feedback
                return response
            } else {
                // ... Show feedback
            }
        })
        .catch((error) => {
            console.error(error)
        });
};

function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
    authentication,
    user
  }
}

const connectedContents = connect(mapStateToProps, {
})(RegisterPage);
export { connectedContents as RegisterPage }
