import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// Elements
import logo from '../assets/images/logo.png';
import deleteIcon from '../assets/icons/delete_white_24dp.svg';

import ModalAddUserToCompany from '../components/modalAddUserToCompany';
import ModalRemoveUserToCompany from '../components/modalRemoveUserToCompany';

import { useDocumentTitle } from "../hooks/useDocumentTitle";
import api from "../services/api";

function UsersEdit() {
   useDocumentTitle("Editar usuário");
   
   const { id } = useParams();
   
   const [user, setUser] = useState({});
   const [userCompanies, setUserCompanies] = useState([]);
   const [listCompanies, setListCompanies] = useState([]);
   const [hasError, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      api.get(`/users/${id}`)
        .then(response => {
          setUser(response.data);
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

   useEffect(() => {
      api.get(`/userCompanies/${id}`)
         .then(response => {
            setUserCompanies(response.data);
            setIsLoaded(true);
         })
         .catch(error => {
            console.log(error)
         })

      console.log(typeof userCompanies);
   }, []);

   //Create
   async function userCompanyCreate(data) {
      setIsLoaded(null);
      await api.post(`/userCompanies`, data)
      .then(response => {
        setIsLoaded(true);
        window.location.href = `/users/${id}/edit`;
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

   //Delete userCompany
   async function userCompanyRemove(data) {
      setIsLoaded(null);
      await api.delete(`/userCompanies/${id}`)
      .then(() => {
        setIsLoaded(true);
       // window.location.reload();
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

   //Lista all companies
   useEffect(() => {
      setIsLoaded(null);
      api.get(`/companies`)
         .then(response => {
            setListCompanies(response.data);
            setIsLoaded(true);
         })
         .catch(error => {
            console.log(error)
            setIsLoaded(true);
         })

      console.log(typeof listCompanies);
   }, []);

   return (
      <div className="container">
         <div className="content">
            <div className="block-content">
               <div className="text-center">
                  <Link to="/">
                     <img src={logo} alt="logo" />
                  </Link>
               </div>

               <div className="row mt-5 mb-2">
                  <h5 className="fw-bolder text-center">Editar usuário</h5>
               </div>

               <div className="row">
                  <div className="col-12 mb-3">
                     <label className="form-label">Nome</label>
                     <input type="text" className="form-control" value={user.name} />
                  </div>
                  <div className="col-12 mb-3">
                     <label className="form-label">Email</label>
                     <input type="email" className="form-control" value={user.email} />
                  </div>
                  <div className="row">
                     <div className="col-md-6 mb-3">
                     <label className="form-label">Telefone</label>
                     <input type="text" className="form-control" value={user.phone} />
                     </div>
                     <div className="col-md-6 mb-3">
                     <label className="form-label">Data de Nascimento</label>
                     <input type="date" className="form-control" value={user.birthday} />
                     </div>
                  </div>
                  <div className="col-12 mb-3">
                     <label className="form-label">Cidade onde nasceu</label>
                     <input type="text" className="form-control" value={user.city_name} />
                  </div>

                  <div>
                     <button 
                     className="btn btn-dark" 
                     type="button"
                     data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                     Atualizar</button>
                  </div>
               </div>
               
               <div className="mt-5">
                  <h5 className="fw-bolder text-center">Empresas vinculadas a este usuário</h5>
               </div>
               
               { (!userCompanies) 
                  ? <div className="text-center my-5">Usuários sem vínculos</div> 
                  :  <div className="row mt-5">
                        <div className="table-responsive">
                           <table className="table">
                           <thead>
                                 <tr>
                                    <th>Nome</th>
                                    <th>CNPJ</th>
                                    <th>Endereço</th>
                                    <th></th>
                                 </tr>
                           </thead>
                           <tbody>
                              {userCompanies.map((company) => {
                                 return (
                                 <tr key={company.id.toString()}>
                                    <td>{ company.company_name }</td>
                                    <td>{ company.document }</td>
                                    <td>{ company.address }</td>
                                    <td>
                                       <span 
                                       className="btn button-small btn-dark button-delete"
                                       data-bs-toggle="modal" data-bs-target="#modalUserDelete">
                                       <img src={deleteIcon} alt="" /></span>
                                    </td>
                                 </tr>
                                 );
                              })
                              }
                           </tbody>
                           </table>
                        </div>
                     </div>
               }
               
               <div className="mt-2">
                  <button 
                     className="btn btn-dark" 
                     type="button"
                     data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                     Vincular nova empresa</button>
               </div>

               <div className="text-center mt-5">
                  <Link to="/" className="btn btn-sm btn-secondary me-2">
                     Voltar ao início</Link>
               </div>
         </div>
      </div>
      <ModalAddUserToCompany 
         userId={id} 
         companies={listCompanies} 
         userCompanyCreate={userCompanyCreate} />

      <ModalRemoveUserToCompany 
         userId={id}
         userCompanyRemove={userCompanyRemove}/>
    </div>  
  );
}

export default UsersEdit;