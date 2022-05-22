import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
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
    id: 0,
    nombre: '',
    descripcion: '',
    precio: ''
  }

  constructor(private service:ProductoService,private messageService: MessageService) { }

  ngOnInit() {
   this.traerProductos();
   //menu 
   this.items= [
     {
      label: "Nuevo",
      icon:'pi pi-fw pi-plus',
      command:()=>this.showSaveDialog()
     },
     {
       label: "Editar",
       icon: "pi pi-fw pi-pencil"
     }
   ]
  }

  showSaveDialog(){
    //cuando dé click el dialog o modal se muestre
    this.display=true;
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
      this.productos.push(producto);
      console.log(this.productos);
       })       
      //envia mje de agregado
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Producto agregado correctamente'});
      //desactiva el modal o dialog
      this.display=false;
      
    
     }
    
  



}
