function Trabajo (codigo,descripcion,prioridad){ 
  this.Trabajo(codigo,descripcion,prioridad);
}

Trabajo.prototype={ 
  Trabajo: function(codigo,descripcion,prioridad){
    this.codigo=codigo;
    this.descripcion=descripcion;
	this.prioridad=prioridad;
  },
  completo: function (sep) { return this.codigo +  sep + this.descripcion; },
  
    subirPrioridad:function (){
		if(this.prioridad=="Baja"){
			this.prioridad="Media";
			}
		else if(this.prioridad=="Media"){
			this.prioridad="Alta";
			}
		else if(this.prioridad=="Alta"){
			this.prioridad="Urgente";
			}
		else
			window.alert("No puede seguir");
	},
  
  bajarPrioridad:function (){
		if(this.prioridad=="Urgente"){
			this.prioridad="Alta";
			}
		else if(this.prioridad=="Alta"){
			this.prioridad="Media";
			}
		else if(this.prioridad=="Media"){
			this.prioridad="Baja";
			}
		else
			window.alert("No puede seguir");
	},
}
