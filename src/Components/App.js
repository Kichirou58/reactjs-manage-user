import './../App.css';
import AddUser from './AddUser';
import ButtonFormAddUser from './ButtonFormAddUser';
import DataTable from './DataTable';
import Header from './Header';
import SearchForm from './SearchForm';
import React, { Component } from 'react';

import DataUser from './Data.json';

import { v4 as uuidv4 } from 'uuid';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      dataUser: [],
      dataSearch: "",
      id: "",
      name: "",
      phoneNumber: "",
      permission: "",
      editUserStatus: false,
      userEditObject: {}
    }
  }

  componentWillMount() {
    //kiểm tra có local storage chưa
    if (localStorage.getItem('dataLocal') === null) {
      localStorage.setItem('dataLocal', JSON.stringify(DataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem('dataLocal'));
      this.setState({
        dataUser: temp
      });
    }
  }

  changeStatus = () => {
    this.setState({
      displayForm: !this.state.displayForm
    })
  }

  searchData = (dataSearchInput) => {
    this.setState({
      dataSearch: dataSearchInput
    })
  }

  getNewDataUser = (name, phoneNumber, permission) => {
    console.log(name + " " + phoneNumber + " " + permission + " ");

    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.phoneNumber = phoneNumber;
    item.permission = permission;

    var items = this.state.dataUser;
    items.push(item);

    this.setState({
      dataUser: items
    });
    // set vào local storage
    localStorage.setItem('dataLocal', items);
  }

  editUser = (user) => {
    this.setState({
      userEditObject: user
    });
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  getUserEditInfoApp = (info) => {
    this.state.dataUser.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.phoneNumber = info.phoneNumber;
        value.permission = info.permission;
      }
    })
    // set vào local storage
    localStorage.setItem('dataLocal', JSON.stringify(this.state.dataUser));
  }

  deleteUser = (idUser) => {
    var tempData = this.state.dataUser;
    tempData = tempData.filter(item => item.id !== idUser);
    this.setState({
      dataUser: tempData
    });
    // set vào local storage
    localStorage.setItem('dataLocal', JSON.stringify(tempData));
  }

  render() {

    var resultSearch = [];
    if (this.state.dataSearch !== "") {
      this.state.dataUser.forEach((item) => {
        if (item.name.indexOf(this.state.dataSearch) !== -1) {
          resultSearch.push(item);
        }
      })
    } else {
      resultSearch = this.state.dataUser;
    }

    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <SearchForm
                searchData={(dataSearch) => this.searchData(dataSearch)}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                userEditObject={this.state.userEditObject}
                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)} />
              <DataTable
                dataUserProps={resultSearch}
                edit={(user) => this.editUser(user)}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                deleteUser={(idUser) => this.deleteUser(idUser)} />
              <div class="col-3">
                <ButtonFormAddUser
                  changeStatus={() => this.changeStatus()}
                  displayForm={this.state.displayForm} />
                <AddUser
                  displayForm={this.state.displayForm}
                  add={(name, phoneNumber, permission) => this.getNewDataUser(name, phoneNumber, permission)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;