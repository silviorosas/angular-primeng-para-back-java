import { Component, ɵgetDebugNodeR2 } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaprimeng';
  importe: any[] = [];
  cuotas: any[] = [];
  tplan: any[] = [];
  amort: any[] = [];

  selectedCity1: any;

  selectedCity2: any;

  distritoJudicial: any[]=[];
  
  datos: any = []
  constructor(){

    let d= {n: 1, ven: "01/01/2023",saldo:"1000",cap:"34567",int: "32", ca:"23", total: "1234567",iva:"23",tiva:"345"}
    this.datos.push(d)
    let d1= {n: 2, ven: "01/01/2023",saldo:"1000",cap:"34567",int: "32", ca:"23", total: "1234567",iva:"23",tiva:"345"}
    this.datos.push(d1)
    let d2= {n: 3, ven: "01/01/2023",saldo:"1000",cap:"34567",int: "32", ca:"23", total: "1234567",iva:"23",tiva:"345"}
    this.datos.push(d2)
    let d3= {n: 4, ven: "01/01/2023",saldo:"1000",cap:"34567",int: "32", ca:"23", total: "1234567",iva:"23",tiva:"345"}
    this.datos.push(d3)
    let d4= {n: 5, ven: "01/01/2023",saldo:"1000",cap:"34567",int: "32", ca:"23", total: "1234567",iva:"23",tiva:"345"}
    this.datos.push(d4)
    let d5= {n: 6, ven: "01/01/2023",saldo:"1000",cap:"34567",int: "32", ca:"23", total: "1234567",iva:"23",tiva:"345"}
    this.datos.push(d5)
    let d6= {n: 7, ven: "01/01/2023",saldo:"1000",cap:"34567",int: "32", ca:"23", total: "1234567",iva:"23",tiva:"345"}
    this.datos.push(d6)
    let d7= {n: 8, ven: "01/01/2023",saldo:"1000",cap:"34567",int: "32", ca:"23", total: "1234567",iva:"23",tiva:"345"}
    this.datos.push(d7)
    let d8= {n: 9, ven: "01/01/2023",saldo:"1000",cap:"34567",int: "32", ca:"23", total: "1234567",iva:"23",tiva:"345"}
    this.datos.push(d8)
    let d9= {n: 10, ven: "01/01/2023",saldo:"1000",cap:"34567",int: "32", ca:"23", total: "1234567",iva:"23",tiva:"345"}
    this.datos.push(d9)
    let d10= {n: 11, ven: "01/01/2023",saldo:"1000",cap:"34567",int: "32", ca:"23", total: "1234567",iva:"23",tiva:"345"}
    this.datos.push(d10)
    let d11= {n: 12, ven: "01/01/2023",saldo:"1000",cap:"34567",int: "32", ca:"23", total: "1234567",iva:"23",tiva:"345"}
    this.datos.push(d11)
    
  }

  
  
  ngOnInit(){

    this.importe = [
      {
          cname: 10000,        
                      
      }, 
      {
        cname: 20000,        
                    
    },      
  ];
  
  this.cuotas = [
    {
        cname2: 6,        
                    
    }, 
    {
      cname2: 12,        
                  
  }, 
  
];

  this.tplan = [
    {
        cname3: "Municipal",        
                    
    }, 
    {
      cname3: "Provincial",        
                  
  },    
];

this.amort = [
  {
      cname3: "Francés",        
                  
  }, 
  {
    cname3: "Provincial",        
                
},    
];



this.distritoJudicial = [
  {
      name: 'Distrito Judicial',
    
      fueros: [
          {
              name: 'Federal',
              fedOrd: [
                  {cname: 'FCR'},
                  {cname: 'Juzgados'},
                 
              ]
          },
          {
              name: 'Ordinario',
              fedOrd: [
                  {cname: 'Sur'},
                  {cname: 'Norte'}
              ]
          },
          
      ]
  },     
  
]




}

}


