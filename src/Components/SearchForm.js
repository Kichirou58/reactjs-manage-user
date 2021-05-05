import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSearch: "",
            userObj: {}
        }
    }

    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
        this.props.searchData(this.state.dataSearch);
    }

    isShowEditOn = () => {
        if (this.props.editUserStatus) {
            return <EditUser
                changeEditUserStatus={this.props.changeEditUserStatus}
                userEditObject={this.props.userEditObject} 
                getUserEditInfo ={(info) => this.getUserEditInfo(info)}/>
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfoApp(info);
    }

    render() {
        return (
            <div className="col-12">
                {this.isShowEditOn()}
                <div className="form-group">
                    <div className="btn-group">
                        <input name="dataSearch" onChange={(e) => this.isChange(e)} type="text" className="form-control" placeholder="Nhập từ khóa" width="500px" style={{ width: '610px' }} />
                        <div className="btn btn-info" onClick={() => this.props.searchData(this.state.dataSearch)}>Tìm</div>
                    </div>
                </div>
                <hr />
            </div>

        );
    }
}

export default SearchForm;