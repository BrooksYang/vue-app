<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <router-link to="/">
                                <Icon type="ios-navigate"></Icon>
                                Home
                            </router-link>
                        </MenuItem>
                        <MenuItem name="2">
                            <router-link to="/about">
                                <Icon type="ios-keypad"></Icon>
                                About
                            </router-link>
                        </MenuItem>
                        <MenuItem name="3">
                            <router-link to="/table">
                                <Icon type="ios-analytics"></Icon>
                                Table
                            </router-link>
                        </MenuItem>
                        <MenuItem name="4">
                            <router-link to="/form">
                                <Icon type="ios-paper"></Icon>
                                Form
                            </router-link>
                        </MenuItem>
                        <MenuItem name="5">
                            <span @click="logout">
                                <Icon type="ios-paper"></Icon>
                                Logout
                            </span>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">

                <router-view></router-view>

            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: 'app',

        methods: {
            logout() {
                this.$store.dispatch('logout');
            }
        }
    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 520px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
    a {
        color: #eee;
    }
</style>
