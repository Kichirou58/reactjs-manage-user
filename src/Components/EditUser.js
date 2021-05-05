import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            phoneNumber: this.props.userEditObject.phoneNumber,
            permission: this.props.userEditObject.permission
        }
    }

    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phoneNumber = this.state.phoneNumber;
        info.permission = this.state.permission;

        this.props.getUserEditInfo(info); //get user edit -> parameter for searchForm

        this.props.changeEditUserStatus(); //change status form
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <form method="post">
                        <div className="card text-white bg-warning mb-3 mt-2" >
                            <div className="card-header text-center">Chỉnh sửa thông tin user</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input name="name" type="text" className="form-control" placeholder="Enter username"
                                        defaultValue={this.props.userEditObject.name}
                                        onChange={(e) => this.isChange(e)} />
                                </div>
                                <div className="form-group">
                                    <input name="phoneNumber" type="text" className="form-control" placeholder="Enter phone number"
                                        defaultValue={this.props.userEditObject.phoneNumber}
                                        onChange={(e) => this.isChange(e)} />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" required name="permission"
                                        defaultValue={this.props.userEditObject.permission}
                                        onChange={(e) => this.isChange(e)}>
                                        <option value>Chọn quyền</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary" value="Save" onClick={() => this.saveButton()} />
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}

export default EditUser;