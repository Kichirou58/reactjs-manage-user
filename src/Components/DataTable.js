import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class DataTable extends Component {

    deleteUser = (idUser) => {
        this.props.deleteUser(idUser);
    }

    fillDataTable = () => this.props.dataUserProps.map((value, key) => (
        <TableDataRow id={value.id}
            name={value.name}
            phoneNumber={value.phoneNumber}
            permission={value.permission}
            key={key}
            editClick={(user) => this.props.edit(value)} 
            changeEditUserStatus = {this.props.changeEditUserStatus}
            deleteUser = {(idUser) => this.props.deleteUser(idUser)}/>
    ))

    render() {
        return (
            <div className="col-9">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.fillDataTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DataTable;