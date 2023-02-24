import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Elements
import logo from '../assets/images/logo.png';
import deleteIcon from '../assets/icons/delete_white_24dp.svg';
import editIcon from '../assets/icons/edit_white_24dp.svg';

import ModalUserCreate from '../components/modalUserCreate';
import ModalUserDelete from '../components/modalUserDelete';

import { useDocumentTitle } from "../hooks/useDocumentTitle";

import api from "../services/api";

function Home() {
  
  useDocumentTitle("Início");

  const [users, setUsers] = useState([]);
  const [hasError, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    api.get('/users')
      .then(response => {
        setUsers(response.data);
        setIsLoaded(true);
      })
      .catch(error => {
        console.log(error)
        setIsLoaded(true);
        if (error.response.data != null) {
          setError(error.response.data.message);
        } else {
          setError(error.message);
        }
      })
  }, []);

  // Search 
  const [searchParam, setParam] = useState(["name"]);
  
  async function search(name) {

    if (name.length < 3) {
      return setError('Informar ao menos 3 caracteres');
    }

    await api.get(`/users?query=${name}&param=${searchParam}`)
      .then(response => {
        setUsers(response.data);
        setError(null);
        setIsLoaded(true);
      })
      .catch(error => {
        console.log(error)
        setIsLoaded(true);
        if (error.response.data != null) {
          setError(error.response.data.message);
        } else {
          setError(error.message);
        }
      })
  }

  //User delete 
  const [userData, setUserDelete] = useState({});
  async function userDelete() {
    await api.delete(`/users/${userData.id}`)
      .then(response => {
        setUsers(response.data);
        setIsLoaded(true);
        window.location.reload();
      })
      .catch(error => {
        console.log(error)
        setIsLoaded(true);
        if (error.response.data != null) {
          setError(error.response.data.message);
        } else {
          setError(error.message);
        }
      })
  }

  //User Create 
  async function userCreate(data) {
    await api.post(`/users`, data)
      .then(response => {
        setIsLoaded(true);
        window.location.href = `/users/${response.data.id}/edit`;
      })
      .catch(error => {
        console.log(error)
        setIsLoaded(true);
        if (error.response.data != null) {
          setError(error.response.data.message);
        } else {
          setError(error.message);
        }
      })
  }

  //
  if (!isLoaded) {
    return <div className="block-content">Carregando...</div>;

  } else {
    return (
      <div className="container">
        <div className="content">
          <div className="block-content">
              <div className="text-center">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              
              <div className="row mt-5">
                <div className="col-md-4 mb-3">
                    <button 
                      className="btn btn-dark" 
                      type="button"
                      data-bs-toggle="modal" data-bs-target="#staticBackdrop">+</button>
                </div>
                <div className="col-md-6 mb-3">
                    <div>
                      <input 
                        onChange={(e) => search(e.target.value)} 
                        type="email" 
                        className="form-control" 
                        placeholder="Buscar..." />
                    </div>
                </div>
                <div className="col-md-2 mb-3">
                    <select 
                        onChange={(e) => setParam(e.target.value)} 
                        className="form-select" 
                        aria-label="Selecione">
                      <option value="name">Nome</option>
                      <option value="email">Email</option>
                      <option value="phone">Telefone</option>
                    </select>
                </div>
              </div>

              { (hasError) 
                  ? <div className="text-center my-5">{hasError}</div> 
                  : <div className="row mt-4">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Nascimento</th>
                                <th>Cidade</th>
                                <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {users.map((user) => {
                                return (
                                  <tr>
                                    <td>{ user.name }</td>
                                    <td>{ user.email }</td>
                                    <td>{ user.phone }</td>
                                    <td>{ user.birthday }</td>
                                    <td>{ user.city_name }</td>
                                    <td>
                                      <Link to={`/users/${user.id}/edit`} className="btn button-small btn-dark me-2">
                                        <img src={editIcon} alt="" /></Link>
                                      <span 
                                        onClick={() => setUserDelete(user)}
                                        className="btn button-small btn-dark button-delete"
                                        data-bs-toggle="modal" data-bs-target="#modalUserDelete">
                                        <img src={deleteIcon} alt="" /></span>
                                    </td>
                                  </tr>
                                );
                              })}
                          </tbody>
                        </table>
                      </div>
                    </div>
              }
          </div>
        </div>

        <ModalUserCreate userCreate={userCreate} />

        <ModalUserDelete 
            id={userData.id} 
            name={userData.name} 
            userDelete={userDelete} />
      </div>
    );
  }
}

export default Home;