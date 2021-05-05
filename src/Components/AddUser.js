import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phoneNumber: "",
            permission: ""
        }
    }

    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    // logic hien thi button
    displayForm = () => {
        if (this.props.displayForm) {
            // Viết dạng arrow function sẽ không bị call tới luôn, tránh bị loop nest
            return (
                <div className="card border-primary mb-3 mt-2" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Thêm mới thành viên</div>
                    <div className="card-body text-primary">
                        <form>
                            <div className="form-group">
                                <input name="name" onChange={(e) => this.isChange(e)} type="text" className="form-control" placeholder="Enter username" />
                            </div>
                            <div className="form-group">
                                <input name="phoneNumber" onChange={(e) => this.isChange(e)} type="text" className="form-control" placeholder="Enter phone number" />
                            </div>
                            <div className="form-group">
                                <select className="custom-select" required name="permission" onChange={(e) => this.isChange(e)}>
                                    <option value>Chọn quyền</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary" onClick={(name, phoneNumber, permission) => this.props.add(this.state.name, this.state.phoneNumber, this.state.permission)} value="Thêm mới" />
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {/* logic hien thi form */}
                {this.displayForm()}
            </div>
        );
    }
}

export default AddUser;