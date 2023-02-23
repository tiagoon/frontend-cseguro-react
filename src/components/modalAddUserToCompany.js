function ModalAddUserToCompany() {
   return (
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
         <div class="modal-content">
            <div class="modal-header">
               <h1 class="modal-title fs-5" id="staticBackdropLabel">Inserir</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <select class="form-select" aria-label="Selecione">
                  <option disabled selected>Selecione a empresa</option>
                  <option value="1">Petrobras S/A</option>
                  <option value="2">Vale S/A</option>
                  <option value="3">Itaú S/A</option>
               </select>
            </div>
            <div class="modal-footer text-start">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
               <button type="button" class="btn btn-dark">Cadastrar</button>
            </div>
         </div>
         </div>
      </div>
   );
}

export default ModalAddUserToCompany;