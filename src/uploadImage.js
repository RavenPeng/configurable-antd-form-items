import React from 'react'
import { Upload, Modal, Icon } from 'antd'

export default class UploadImage extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [],
    }
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  };

  handleChange = info => {
    this.props.saveImgUrl(info)
    info.fileList[0].status = 'done'
    this.setState({ fileList: info.fileList })
  };

  clearImage = () => {
    this.setState({ fileList: [] })
    this.props.onRemove && this.props.onRemove()
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isDeleteFile) prevState.fileList = []

    return prevState
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state
    const { actionPath, name } = this.props
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )

    return (
      <div className="clearfix">
        <Upload action={actionPath} listType="picture-card" fileList={fileList} onPreview={this.handlePreview} onChange={this.handleChange} name={name} accept="image/*" onRemove={this.clearImage}>
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    )
  }
}
