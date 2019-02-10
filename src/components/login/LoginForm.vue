<template>
    <form method="post" class="w100">
        <div class="card-body">
            <div class="w100">
                <div class="alert alert-danger"></div>

                <h1 class="">Connexion</h1>
                <div class="form-group">
                    <label for="inputEmail">E-mail</label>
                    <input type="email" value="" name="email" id="inputEmail" required autofocus v-model="input.email">
                </div>
                <div class="form-group">
                    <label for="inputPassword">Mot de passe</label>
                    <input type="password" name="password" id="inputPassword" required v-model="input.password">
                </div>

                <div class="login-submit-btn mt-3">
                    <span class="text-secondary">Me connecter</span>
                    <button class="btn-rounded btn-primary arrow" type="submit" title="se connecter" @click.prevent="login()"><i class="icon-arrow"></i></button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'loginForm',
        data() {
            return {
                input: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            login() {
                console.log(this.input.email, this.input.password);
                if(this.input.email && this.input.password) {
                    if(this.input.email === this.$store.state.mockAccount.email && this.input.password === this.$store.state.mockAccount.password) {
                        this.$store.commit('setAuthenticated');
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>
