import { useState } from 'react';

function ModalAddUserToCompany(props) {

   const [companyId, setCompanyId] = useState('');
   
   function onSubmit() {
      const data = {
         user_id: props.userId,
         company_id: companyId
      };
      props.userCompanyCreate(data)
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
               <select 
                  onChange={(e) => setCompanyId(e.target.value)} 
                  className="form-select" 
                  aria-label="Selecione">
                  {props.companies.map(({ id, company_name }) => <option value={id} key={id.toString()}>{company_name}</option>)}
               </select>
            </div>
            <div className="modal-footer text-start">
               <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
               <button onClick={onSubmit} type="button" className="btn btn-dark">Cadastrar</button>
            </div>
         </div>
         </div>
      </div>
   );
}

export default ModalAddUserToCompany;