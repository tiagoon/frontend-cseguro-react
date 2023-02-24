import { useState } from 'react';

function ModalUserCreate(props) {

   const [userName, setUserName] = useState('');
   const [userEmail, setUserEmail] = useState('');
   const [userPhone, setUserPhone] = useState('');
   const [userBirthday, setUserBirthday] = useState('');
   const [userCityName, setUserCityName] = useState('');


   function onSubmit() {
      const data = {
         name: userName,
         email: userEmail,
         phone: userPhone,
         birthday: userBirthday,
         city_name: userCityName
      };
      props.userCreate(data)
   }

   return (
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
         <div className="modal-content">
            <div className="modal-header">
               <h1 className="modal-title fs-5" id="staticBackdropLabel">Inserir</h1>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
               <form onSubmit={onSubmit}>
                  <div className="mb-3">
                     <label className="form-label">Nome</label>
                     <input 
                        onChange={(e) => setUserName(e.target.value)}
                        type="text" 
                        className="form-control" />
                  </div>
                  <div className="mb-3">
                     <label className="form-label">Email</label>
                     <input 
                        onChange={(e) => setUserEmail(e.target.value)}
                        type="email" 
                        className="form-control" />
                  </div>
                  <div className="row">
                     <div className="col-md-6 mb-3">
                        <label className="form-label">Telefone</label>
                        <input 
                           onChange={(e) => setUserPhone(e.target.value)}
                           type="text" 
                           className="form-control" />
                     </div>
                     <div className="col-md-6 mb-3">
                        <label className="form-label">Data de Nascimento</label>
                        <input 
                           onChange={(e) => setUserBirthday(e.target.value)}
                           type="date" 
                           className="form-control" />
                     </div>
                  </div>
                  <div className="mb-3">
                     <label className="form-label">Cidade onde nasceu</label>
                     <input 
                        onChange={(e) => setUserCityName(e.target.value)}
                        type="text" 
                        className="form-control" />
                  </div>
               </form>
            </div>
            <div className="modal-footer text-start">
               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
               <button onClick={onSubmit} type="button" className="btn btn-dark">Cadastrar</button>
            </div>
         </div>
         </div>
      </div>
   );
}

export default ModalUserCreate;