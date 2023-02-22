const nombre=document.getElementById('nombre')
const edad=document.getElementById('edad')
const genero=document.getElementById('genero')
const fecha=document.getElementById('fecha')

const personas=[
    {nombre:'Tasha',edad:21,genero:'f',fecha:{dia:01,mes:09,anio:2002}},
    {nombre:'Tyrone',edad:19,genero:'m',fecha:{dia:01,mes:07,anio:2004}},
    {nombre:'Uniqua',edad:60,genero:'f',fecha:{dia:01,mes:04,anio:1963}},
    {nombre:'Austin',edad:13,genero:'m',fecha:{dia:01,mes:01,anio:2009}},
    {nombre:'Pablo',edad:9,genero:'m',fecha:{dia:13,mes:09,anio:2014}}
]

const registrar=document.getElementById('anadir')
const mostrarNombres=document.getElementById('mNombres')

registrar.addEventListener('click',()=>{
    let name=nombre.value
    let age=edad.value
    let gender=genero.value
    let date=fecha.value
    if(name=='' || age=='' || gender=='' || date==''){
        alert('Hay campos vacios')
    }else{
        date=date.split('-')
        let dia=Number(date[2])
        let mes=Number(date[1])
        let anio=Number(date[0])
        personas.push({nombre:name,edad:age,genero:gender,fecha:{dia:dia,mes:mes,anio:anio}})
        nombre.value=''
        edad.value=''
        genero.value=''
        fecha.value=''
    }
    
})

mostrarNombres.addEventListener('click',function(){
    let contenido=''
    contenido=`<table><th>Nombres</th>` 
    let nombres=personas.map(persona=>persona.nombre)
    nombres.forEach(nombre=>{
        contenido+=`<tr><td>${nombre}</td></tr>`
    })
    contenido+=`</table>`
    document.getElementById('pantalla').innerHTML=contenido
})

const mostrarEdades=document.getElementById('mEdades')
mostrarEdades.addEventListener('click',calcularEdades)

function calcularEdades(){
    let adultosMayores=personas.filter(persona=>{
        return persona.edad>=50
        }).map(persona=>persona.nombre) //Filter obtiene las personas mayores a 50 y map, crea un arreglo que toma solo el nombre
    let adultos=personas.filter(persona=>{
        return persona.edad>=18 && persona.edad<50
         }).map(persona=>persona.nombre)
    let ninos=personas.filter(persona=>{
        return persona.edad<18
             }).map(persona=>persona.nombre)
  
    let contenido=''
    contenido+=`<table><th>AdultosMayores</th><th>Adultos</th><th>Niños</th>`
    let total=[adultosMayores.length,adultos.length,ninos.length]
    total=Math.max(...total) 
     
    for(i=0;i<total;i++){
        let DadultosMayores=''
        let Dadultos=''
        let Dninos=''
        console.log(adultosMayores[i])
        if (adultosMayores[i]==null){
            DadultosMayores=' '
            
        }else{
            DadultosMayores=adultosMayores[i]
        }
        if (adultos[i]==null){
            Dadultos=' '
        }else{
            Dadultos=adultos[i]
        }
        if (ninos[i]==null){
            Dninos=' '
        } else{
            Dninos=ninos[i]
        }
        contenido+=`<tr><td>${DadultosMayores}</td><td>${Dadultos}</td><td>${Dninos}</td></tr>`
    }
    contenido+='</table>'
    document.getElementById('pantalla').innerHTML=contenido

    // let contenido=''
    // contenido+=`<table><th>Adultos Mayores</th>` 
    // adultosMayores.forEach(nombre=>{
    //     contenido+=`<tr><td>${nombre}</td></tr>`
    // })
    // contenido+=`<th>Adultos</th>`
    // adultos.forEach(nombre=>{
    //     contenido+=`<tr><td>${nombre}</td></tr>`
    // })
    // contenido+=`<th>Niños</th>`
    // ninos.forEach(nombre=>{
    //     contenido+=`<tr><td>${nombre}</td></tr>`
    // })
    // contenido+=`</table>`
    // document.getElementById('pantalla').innerHTML=contenido
}

const mostrarGeneros=document.getElementById('mGeneros')

mostrarGeneros.addEventListener('click',()=>{
    let hombres=personas.filter(persona=>persona.genero=='m')
    let mujeres=personas.filter(persona=>persona.genero=='f')
    let phombres=(hombres.length*100)/personas.length
    let pmujeres=(mujeres.length*100)/personas.length
    let contenido=`<table><th>Genero</th><th>Cantidad</th><tr><td>masculino</td><td>femenino</td></tr><tr><td>${phombres}%</td><td>${pmujeres}%</td><tr></table>`
    document.getElementById('pantalla').innerHTML=contenido
    

})

const mostrarMes=document.getElementById('mMes')

mostrarMes.addEventListener('click',()=>{
    let mBuscado=+prompt('Digita el mes que quiere buscar \n1. Enero \t2. Febrero \t3.Marzo \n4. Abril \t5. Mayo \t6. Junio \n7. Julio \t8. Agosto \t9. Septiembre \n10. Octubre \t11. Noviembre \t12. Diciembre')
    let personasMes=personas.filter(persona=>persona.fecha.mes==mBuscado)
    switch(mBuscado){
        case 1:mBuscado='Enero' 
            break
        case 2:mBuscado='Febrero' 
            break
        case 3:mBuscado='Marzo' 
            break
        case 4:mBuscado='Abril' 
            break
        case 5:mBuscado='Mayo' 
            break
        case 6:mBuscado='Junio' 
            break
        case 7:mBuscado='Julio' 
            break
        case 8:mBuscado='Agosto' 
            break
        case 9:mBuscado='Septiembre' 
            break
        case 10:mBuscado='Octubre' 
            break
        case 11:mBuscado='Noviembre' 
            break
        case 12:mBuscado='Diciembre' 
            break
        default: mBuscado='No es un número de mes'
    }
    let contenido=`<table><th>${mBuscado}</th><th>Día</th>`
    personasMes.forEach(persona=>{
        contenido+=`<tr><td>${persona.nombre}</td><td>${persona.fecha.dia}</td></tr>`
    })
    contenido+=`</table>`
    document.getElementById('pantalla').innerHTML=contenido
    

})