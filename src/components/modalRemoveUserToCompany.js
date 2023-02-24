function ModalRemoveUserToCompany(props) {
   return (
      <div class="modal fade" id="modalUserDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalUserDeleteLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
         <div class="modal-content">
            <div class="modal-header">
               <h1 class="modal-title fs-5" id="modalUserDeleteLabel">Remover usuário</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <p>Confirma a exclusão do usuário {props.name} (ID {props.id})?</p>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
               <button onClick={props.userCompanyDelete} type="button" class="btn btn-dark">Confirmar</button>
            </div>
         </div>
         </div>
      </div>
   );
}

export default ModalRemoveUserToCompany;