function ModalRemoveUserToCompany(props) {
   return (
      <div className="modal fade" id="modalUserDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalUserDeleteLabel" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
         <div className="modal-content">
            <div className="modal-header">
               <h1 className="modal-title fs-5" id="modalUserDeleteLabel">Remover usuário</h1>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
               <p>Confirma a exclusão do usuário {props.company_name} (ID {props.id})?</p>
            </div>
            <div className="modal-footer">
               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
               <button onClick={props.userCompanyRemove} type="button" className="btn btn-dark">Confirmar</button>
            </div>
         </div>
         </div>
      </div>
   );
}

export default ModalRemoveUserToCompany;