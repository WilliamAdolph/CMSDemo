<template>
  <div class="infoshow">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="8">
        <div class="user_self">
          <img :src="user.avatar" class="avatar" alt="">
        </div>
      </el-col>
      <el-col :span="16">
        <div class="userinfo_self">
          <div class="user-item">
            <i class="fa fa-user"></i>
            <span> {{user.name}}</span>
          </div>
          <div class="user-item">
              <i class="fa fa-cog"></i>
              <span>{{user.identity == "manager" ? " 管理员" : " 员工"}}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "infoshow",
  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
}
</script>

<style scpoed>
  .infoshow {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    /* padding: 16px */
  }
  .row-bg {
    width: 100%;
    height: 100%;
  }
  .user_self {
    text-align: center;
    position: relative;
    top: 30%; 
  }
  .user_self img {
    width: 150px;
    border-radius: 50%;
    height: auto;
  }
  .user_self span {
    display: block;
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
  }
  .userinfo_self {
    height: 100%;
    background-color: #eee;
  }
  .user-item {
    position: relative;
    top: 30%;
    padding: 26px;
    font-size: 28px;
    color: #333;
  }
</style>
