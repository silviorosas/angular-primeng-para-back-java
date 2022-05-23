import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Producto } from 'src/models/productos';
import { ProductoService } from '../servicio/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos: Producto[] = [];
  items!: MenuItem[];
  //variable para modal o dialog
  display:boolean=false;
  //para form de agregar producto 
  producto:Producto={
    id: null,
    nombre: null,
    descripcion: null,
    precio: null
  }
  //objeto para el edit
  selectProducto:Producto={
    id:null,
    nombre: null,
    descripcion: null,
    precio: null
  }

  constructor(private service:ProductoService,private messageService: MessageService, private confirmService: ConfirmationService) { }

   //cuando dé click el dialog o modal se muestre y edit
   showSaveDialog(editar:boolean){   
    if(editar){
      if(this.selectProducto != null && this.selectProducto.id != null){
      this.producto = this.selectProducto;
      }else{
        this.messageService.add({severity:'warn', summary:'Advertencia', detail:'Por favor seleccione un producto'});
        return;
      }
     }else{
      this.producto = new Producto();
    }
     this.display=true;
   }

   //para actualizar la tabla con los productos editados o guardados conecta con save()
   validarProducto(producto:Producto){
    let index = this.productos.findIndex((e)=> e.id == producto.id);
    if (index != -1){
      this.productos[index]=producto;
    }else{
      this.productos.push(producto);
    }
  } 
  
 
   traerProductos(){
     this.service.getAll().subscribe( 
     (res:any)=>{
     this.productos= res
     console.log(res)},
     error=>{console.log(error)}
   )    
   }
 
   save() {  
       this.service.nuevoProducto(this.producto).subscribe(     
        (res:any)=>{
         let producto= res as Producto;    
       this.validarProducto(producto);
       this.traerProductos();
       console.log(this.productos);
        })       
       //envia mje de agregado
       this.messageService.add({severity:'success', summary:'Service Message', detail:'Producto agregado correctamente'});
       //desactiva el modal o dialog
       this.display=false;    
      }
     
      delete(){
        if(this.selectProducto == null || this.selectProducto.id == null){
          this.messageService.add({severity:'warn', summary:'Advertencia', detail:'Por favor seleccione un producto'});
          return;
        }
        this.confirmService.confirm({
          message: "Está seguro de eliminar el producto?",
          accept: () => {
            this.service.delete(this.selectProducto.id).subscribe(
              (result:any)=>{
                this.messageService.add({severity:'success', summary:'Service Message', detail:'Producto eliminado correctamente'});    
                this.validarDelete(result.id);

                
              }
            )
          }
        })
      }

      validarDelete(id:number){
        let index = this.productos.findIndex((e)=> e.id == id);
        if(index != -1){
          this.productos.slice(index,1);
          this.traerProductos();
          
        }
      }

     

  ngOnInit() {
   this.traerProductos();
   
   //menu 
   this.items= [
     {
      label: "Nuevo",
      icon:'pi pi-fw pi-plus',
      command:()=>this.showSaveDialog(false)
     },
     {
       label: "Editar",
       icon: "pi pi-fw pi-pencil",
       command:()=>this.showSaveDialog(true)
     },
     {
      label: "Eliminar",
      icon: "pi pi-fw pi-times",
      command:()=> this.delete()
      
     }

   ]
  }

  



}
