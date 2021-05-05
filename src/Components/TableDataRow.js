import React, { Component } from 'react';

class TableDataRow extends Component {

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

    displayPermission = () => {
        if(this.props.permission === 1){
            return "Admin"
        } else if(this.props.permission === 2){
            return "Moderator"
        } else {
            return "Normal"
        }
    }

    edit = () => {
        this.props.editClick();
        this.props.changeEditUserStatus();
    }

    delete = (idUser) => {
        this.props.deleteUser(idUser);
    }

    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phoneNumber}</td>
                <td>{this.displayPermission()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" onClick={() => this.edit()} ><i className="fa fa-edit"></i>Sửa</div>
                        <div className="btn btn-danger sua" onClick={(idUser) => this.delete(this.props.id)} ><i className="fa fa-trash"></i>Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;