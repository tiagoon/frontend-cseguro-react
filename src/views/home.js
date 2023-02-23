import React from 'react';
import { Link } from 'react-router-dom';

// Elements
import logo from '../assets/images/logo.png';
import deleteIcon from '../assets/icons/delete_white_24dp.svg';
import editIcon from '../assets/icons/edit_white_24dp.svg';

import ModalUserCreate from '../components/modalUserCreate';
import ModalUserDelete from '../components/modalUserDelete';

function Home() {
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
                    <input type="email" class="form-control" placeholder="Buscar..." />
                  </div>
              </div>
              <div class="col-md-2 mb-3">
                  <select class="form-select" aria-label="Selecione">
                    <option disabled selected>Selecione</option>
                    <option value="name">Nome</option>
                    <option value="email">Email</option>
                    <option value="phone">Telefone</option>
                  </select>
              </div>
            </div>

            <div class="row mt-4">
              <div class="table-responsive">
                  <table class="table">
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
                        <tr>
                          <td>Tiago Oliveira</td>
                          <td>tiago@gmail.com</td>
                          <td>(79) 99686-8686</td>
                          <td>09/09/1999</td>
                          <td>Aracaju</td>
                          <td>
                              <Link to="/users/edit" class="btn button-small btn-dark me-2">
                                <img src={editIcon} alt="" /></Link>
                              <span 
                                class="btn button-small btn-dark button-delete"
                                data-bs-toggle="modal" data-bs-target="#modalUserDelete">
                                <img src={deleteIcon} alt="" /></span>
                          </td>
                        </tr>
                    </tbody>
                  </table>
              </div>
            </div>
        </div>
      </div>

      <ModalUserCreate />

      <ModalUserDelete name="Tiago" id="83" />
  </div>);
}

export default Home;