<template>
  <!--Сюда мы закидываем код который реализуеться-->
    <el-container>
        <el-header>
            <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#E6A23C"
                    text-color="#303133"
                    active-text-color="#000000">
                    
                    <el-menu-item index="1">Главная страница</el-menu-item>

                    <el-menu-item index="5"><el-input  placeholder="Пораметры поиска" v-model="input"></el-input></el-menu-item>

                    <el-submenu index="2">
                        <template slot="title">Выбрать</template>
                        <el-menu-item index="2-1">Что-то 1</el-menu-item>
                        <el-menu-item index="2-2">Что-то 2</el-menu-item>
                        <el-menu-item index="2-3">Что-то 3</el-menu-item>
                        <el-submenu index="2-4">
                        <template slot="title">Стоит изучить</template>
                        <el-menu-item index="2-4-1">Стоит изучить 1</el-menu-item>
                        <el-menu-item index="2-4-2">Стоит изучить 2</el-menu-item>
                        <el-menu-item index="2-4-3">Стоит изучить 3</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="3" >Важное</el-menu-item>

                    <el-menu-item index="4">
                        <el-button type="text"  @click="dialogVisible = true">Вход / Регистрация</el-button>
                        <el-dialog
                                    title="Вход в личный кабинет"
                                    :visible.sync="dialogVisible"
                                    width="30%"
                                    :before-close="handleClose">
                                    <div>
                                      <el-input placeholder="Введите логин" v-model="user.name"></el-input>
                                    </div>
                                    <div>
                                      <el-input placeholder="Введите пароль" v-model="user.pasvord"></el-input>
                                    </div>
                                    <span slot="footer" class="dialog-footer">
                                      <el-button @click="isUsers">Подтвердить</el-button>
                                      <el-button @click="dialogVisible = false">
                                        <router-link to = "/registration" >Регистрация</router-link>
                                        </el-button>
                                      <el-button type="primary" @click="dialogVisible = false">Вход</el-button>
                                    </span>
                        </el-dialog>
                    </el-menu-item>
            </el-menu>
        </el-header>
    </el-container>
</template>

<script>
  export default {
    data() {
      return {
        user:{
          id: "",
          name: "",
          pasvord: "",
        },

        Users:[
          {
            id: "007",
            name: "admin",
            pasvord: "a very complex password"
          },
          
        ],
        
        Index: "",

        activeIndex: '1',
        activeIndex2: '1',
        dialogVisible: false,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

      

      isUsers(){
        if (this.user.name ==="" || this.user.pasvord ===""){
          alert("Заполните данные пользователя")
          return
        }

        for (let index in this.Users){
          if (this.Users[index].name === this.user.name){
              if (this.Users[index].pasvord === this.user.pasvord){
                 this.dialogVisible = true
                 this.Index = index
                // переход на страницу пользователя
              }
          }
        }
        alert("Пользователь с таким именем не найден")
        this.dialogVisible = true;
        return
      },

       handleClose() {
        this.dialogVisible = !(confirm("Отменить идентификацию пользователя?"))
        
      }
    }
}
</script>

<style>
</style>