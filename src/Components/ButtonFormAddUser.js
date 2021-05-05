import React, { Component } from 'react';

class ButtonFormAddUser extends Component {

    displayButton = () => {
        if (this.props.displayForm) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.changeStatus()}>Đóng lại</div>;
        } else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.changeStatus()}>Thêm mới</div>;
        }
    }

    render() {
        return (
            <div>
                {this.displayButton()}
            </div>
        );
    }
}

export default ButtonFormAddUser;