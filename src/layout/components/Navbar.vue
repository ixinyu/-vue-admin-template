<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu flex a-center">
      <!-- <el-dropdown class="avatar-container ml20">
        <div class="avatar-wrapper">
          <span>选择语言</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click="switchChinese">简体中文</el-dropdown-item>
          <el-dropdown-item @click="switchChinese">English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
      <div class="drawer-item flex a-center">
        <span class="mr10">主题色</span>
        <theme-picker style="float: right;height: 26px;margin: 0 8px 0 0;" @change="themeChange" />
      </div>
      <el-dropdown class="avatar-container ml20" trigger="click">
        <div class="avatar-wrapper">
          <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
          <span>{{ name }}</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ThemePicker from '@/components/ThemePicker'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    ThemePicker
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'name'
    ]),
    ...mapState({
      showSettings: state => state.settings.showSettings
    })
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    themeChange(val) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
    },
    switchChinese() {
      this.$i18n.locale = 'cn'
    },
    switchEnlish() {
      this.$i18n.locale = 'en'
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    &:focus {
      outline: none;
    }
    .drawer-item {
      color: rgba(0, 0, 0, .65);
      font-size: 14px;
      height: 100%;
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;
      display: flex;
      align-items: center;
      .avatar-wrapper {
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          // position: absolute;
          // right: -20px;
          // top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
