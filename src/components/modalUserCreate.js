function ModalUserCreate() {
   return (
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
         <div class="modal-content">
            <div class="modal-header">
               <h1 class="modal-title fs-5" id="staticBackdropLabel">Inserir</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <div class="mb-3">
                  <label class="form-label">Nome</label>
                  <input type="text" class="form-control" />
               </div>
               <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input type="email" class="form-control" />
               </div>
               <div class="row">
                  <div class="col-md-6 mb-3">
                     <label class="form-label">Telefone</label>
                     <input type="text" class="form-control" />
                  </div>
                  <div class="col-md-6 mb-3">
                     <label class="form-label">Data de Nascimento</label>
                     <input type="date" class="form-control" />
                  </div>
               </div>
               <div class="mb-3">
                  <label class="form-label">Cidade onde nasceu</label>
                  <input type="text" class="form-control" />
               </div>
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

export default ModalUserCreate;