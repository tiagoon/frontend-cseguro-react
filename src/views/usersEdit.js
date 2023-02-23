import React from 'react';
import { Link } from 'react-router-dom';

// Elements
import logo from '../assets/images/logo.png';
import deleteIcon from '../assets/icons/delete_white_24dp.svg';

import ModalAddUserToCompany from '../components/modalAddUserToCompany';
import ModalRemoveUserToCompany from '../components/modalRemoveUserToCompany';

function UsersEdit() {
   return (
      <div class="container">
         <div class="content">
            <div class="block-content">
               <div className="text-center">
                  <Link to="/">
                     <img src={logo} alt="logo" />
                  </Link>
               </div>

               <div class="row mt-5">
                  <h5 class="fw-bolder">Editar usuário</h5>
               </div>

               <div class="row">
                  <div class="col-12 mb-3">
                     <label class="form-label">Nome</label>
                     <input type="text" class="form-control" value="Tiago Oliveira" />
                  </div>
                  <div class="col-12 mb-3">
                     <label class="form-label">Email</label>
                     <input type="email" class="form-control" value="tiago@gmail.com" />
                  </div>
                  <div class="row">
                     <div class="col-md-6 mb-3">
                     <label class="form-label">Telefone</label>
                     <input type="text" class="form-control" value="(79) 99686-9900" />
                     </div>
                     <div class="col-md-6 mb-3">
                     <label class="form-label">Data de Nascimento</label>
                     <input type="date" class="form-control" value="1999-09-09" />
                     </div>
                  </div>
                  <div class="col-12 mb-3">
                     <label class="form-label">Cidade onde nasceu</label>
                     <input type="text" class="form-control" value="Aracaju" />
                  </div>

                  <div>
                     <button 
                     class="btn btn-dark" 
                     type="button"
                     data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                     Atualizar</button>
                  </div>
               </div>
               
               <div class="mt-5">
                  <h5 class="fw-bolder">Empresas vinculadas a este usuário</h5>
               </div>
               
               <div class="row mt-1">
                  <div class="table-responsive">
                     <table class="table">
                     <thead>
                           <tr>
                              <th>Nome</th>
                              <th>CNPJ</th>
                              <th>Endereço</th>
                              <th></th>
                           </tr>
                     </thead>
                     <tbody>
                           <tr>
                              <td>Itaú S/A</td>
                              <td>13.456.321/0001-28</td>
                              <td>Av 13 de Julho, Centro, Aracaju/SE</td>
                              <td>
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

               <div class="mt-2 mb-2">
                  <Link to="/" class="btn btn-secondary me-2">
                     Voltar</Link>
                  <button 
                     class="btn btn-dark" 
                     type="button"
                     data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                     Vincular nova empresa</button>
               </div>
         </div>
      </div>
      <ModalAddUserToCompany />
      <ModalRemoveUserToCompany name="Tiago" id="83" />
    </div>  
  );
}

export default UsersEdit;