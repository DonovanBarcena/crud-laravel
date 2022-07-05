<template>
    <div class="row">
        <div class="col-12 mb-2">
            
            <router-link :to='{name:"crearLibro"}' class="btn btn-success"><i class="fas fa-plus-circle"></i></router-link>
        </div>
        <div class="col-12">             
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="bg-primary text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Autor</th>
                                    <th>Título</th>
                                    <th>Edicion</th>
                                    <th>Datos de la publicacion</th>
                                    <th>Tipo de contenido</th>
                                    <th>Restricciones</th>
                                    <th>Materia</th>
                                    <th>Proveedor</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="libro in libros" :key="libro.id">
                                    <td>{{ libro.id }}</td>
                                    <td>{{ libro.titulo }}</td>
                                    <td>{{ libro.contenido }}</td>
                                    <td>
                                        <!-- llamamos al componente para Editar     -->
                                        <router-link :to='{name:"editarLibro",params:{id:libro.id}}' class="btn btn-info"><i class="fas fa-edit"></i></router-link>
                                        <a type="button" @click="borrarLibro(libro.id)" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>                          
        </div>
    </div>
</template>

<script>
export default {
    name:"libros",
    data(){
        return {
            libros:[]
        }
    },
    mounted(){
        this.mostrarLibros()
    },
    methods:{
        async mostrarLibros(){
            await this.axios.get('/api/libro').then(response=>{
                this.libros = response.data
            }).catch(error=>{
                console.log(error)
                this.libros = []
            })
        },
        borrarLibro(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`/api/libro/${id}`).then(response=>{
                    this.mostrarLibros()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>