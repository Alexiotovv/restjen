<div class="row page-titles">
    <div class="col-md-5 col-8 align-self-center">
        <h4 class="m-b-0 m-t-0">Ajustes</h4>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?php echo URL; ?>ajuste" class="link">Inicio</a></li>
            <li class="breadcrumb-item"><a href="<?php echo URL; ?>ajuste" class="link">Empresa</a></li>
            <li class="breadcrumb-item active">Tipos de pago</li>
        </ol>
    </div>
</div>
<div class="row">
    <div class="col-md-8">
        <div class="card">         
            <div class="card-body p-b-0">
                <div class="message-box contact-box">
                    <h2 class="add-ct-btn"><a href="javascript:void(0)"><button type="button" class="btn btn-circle btn-lg btn-orange waves-effect waves-dark btn-nuevo"><i class="ti-plus"></i></button></a></h2><br>
                </div>
            </div>
            <form>
            <div class="card-body p-0">
                <div class="row floating-labels m-t-5">
                    <div class="col-sm-8 offset-sm-4 col-lg-4 offset-lg-8">
                        <div class="form-group m-b-10">
                            <input type="text" class="form-control global_filter" id="global_filter" autocomplete="off">
                            <span class="bar"></span>
                            <label for="global_filter">B&uacute;squeda</label>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            <div class="card-body p-0">
                <div class="table-responsive b-t m-b-10">
                    <table id="table" class="table table-hover stylish-table" cellspacing="0" width="100%">
                        <thead class="table-head">
                            <th>Nombre</th>
                            <th>Tipo</th>
                            <!-- <th>Delivery</th> -->
                            <th>Estado</th>
                            <th class="text-right">Acciones</th>
                        </thead>
                        <tbody class="tb-st"></tbody>
                    </table>
                </div>          
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="alert alert-info font-15">
            <h3 class="text-info"><i class="fa fa-exclamation-circle"></i> Informaci&oacute;n</h3>
            <dl>
                <dt>Tipos de pago</dt>
                <dd>Permite crear tipos de pago que a su vez se le debe asignar una categoria sobre la cual debería reflejarse.</dd>
            </dl>
        </div>
    </div>
</div>

<div class="modal inmodal" id="modal" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static" data-keyboard="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content animated bounceInRight">
        <form id="form" method="post" enctype="multipart/form-data">
        <input type="hidden" name="id_pago" id="id_pago">
            <div class="modal-header">
                <h4 class="modal-title"></h4>
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Cerrar</span></button>
            </div>
            <div class="modal-body">
                <div class="row floating-labels m-t-40">
                    <div class="col-sm-12">
                        <div class="form-group letNumMayMin f m-b-40">
                            <input type="text" class="form-control input-mayus" name="nombre" id="nombre" value="" autocomplete="off" required>
                            <span class="bar"></span>
                            <label for="nombre">Nombre</label>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group m-b-40">
                            <select class="selectpicker form-control" name="
                            
                            " id="id_tipo_pago" data-style="form-control btn-default" data-live-search-style="begins" data-live-search="true" title="Seleccionar" autocomplete="off" required="required">
                            <?php foreach($this->TipoPago as $key => $value): ?>
                                <option value="<?php echo $value['id_pago']; ?>"><?php echo $value['descripcion']; ?></option>
                            <?php endforeach; ?>
                            </select>
                            <span class="bar"></span>
                            <label for="id_tipo_pago">Tipo</label>
                        </div>
                    </div>
                    <!-- <div class="col-sm-12">
                        <div class="form-group letNumMayMin f m-b-40">
                            <input type="text" class="form-control" name="comunicacion" id="comunicacion" value="" autocomplete="off">
                            <span class="bar"></span>
                            <label for="comunicacion">Dato de comunicaci&oacute;n</label>
                        </div>
                    </div> -->
                    <!-- <div class="col-sm-12">
                        <div class="form-group f m-b-40">
                            <input type="color" class="form-control" name="color" id="color" value="" autocomplete="off" required>
                            <span class="bar"></span>
                            <label for="color">Color</label>
                        </div>
                    </div> -->
                    <div class="col-sm-6">
                        <div class="form-group m-b-40">
                            <select class="selectpicker form-control" name="estado" id="estado" data-style="form-control btn-default">
                                <option value="a" active>ACTIVO</option>
                                <option value="i">INACTIVO</option>  
                            </select>
                            <span class="bar"></span>
                            <label for="estado">Estado</label>
                        </div>
                    </div>
                    <!-- <div class="col-sm-6">
                        <div class="form-group m-b-40">
                            <select class="selectpicker form-control" name="delivery" id="delivery" data-style="form-control btn-default">
                                <option value="1">SI</option>
                                <option value="0" active>NO</option>  
                            </select>
                            <span class="bar"></span>
                            <label for="delivery">Delivery <i class="ti-info-alt text-warning font-10" data-original-title="¿Deseas mostrar este tipo de pago en tus deliverys?" data-toggle="tooltip" data-placement="top"></i></label>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="submit" class="btn btn-success btn-guardar">Aceptar</button>
            </div>
        </form>
        </div>
    </div>
</div>