<template>
    <div id="login">

        <div id="nav">
            <router-link v-if="getAuthenticated" to="/" v-on:click.native="logout()" replace>Logout</router-link>
        </div>

        <div class="login-ban">
            <img src="../assets/image/login-ban.png" alt="Logo des entreprises" />
        </div>
        <div class="row justify-content-center w100">
            <div class="card">
                <loginForm></loginForm>
            </div>
        </div>

        <div class="row mt-1">
            <a href="" title="demander un nouveau mot de passe" class="forget-pwd">Mot de passe oublié ?</a>
        </div>

        <div class="row justify-content-center mt-2 w100">
            <div class="card register">
                <div class="card-body">
                    <div class="login-submit-btn">
                        <span class="text-secondary">M'inscrire</span>
                        <a href="" class="btn-rounded btn-secondary arrow-secondary"><i class="icon-arrow"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginForm from '@/components/login/LoginForm'

    export default {
        name: 'login',
        components: {
            LoginForm
        },
        computed: {
            getAuthenticated() {
                return this.$store.state.authenticated
            }
        },
        methods: {
            logout() {
                return this.$store.commit('logout')
            }
        }
    }
</script>
