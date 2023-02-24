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
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
         <div class="modal-content">
            <div class="modal-header">
               <h1 class="modal-title fs-5" id="staticBackdropLabel">Inserir</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <select 
                  onChange={(e) => setCompanyId(e.target.value)} 
                  class="form-select" 
                  aria-label="Selecione">
                  <option value="3">Itaú S/A</option>
               </select>
            </div>
            <div class="modal-footer text-start">
               <button onClick={onSubmit} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
               <button type="button" class="btn btn-dark">Cadastrar</button>
            </div>
         </div>
         </div>
      </div>
   );
}

export default ModalAddUserToCompany;