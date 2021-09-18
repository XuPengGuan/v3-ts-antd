<template>
  <div class="login-wrapper">
    <div class="logo-wrapper">
      <RedditOutlined class="icon-wrapper" />
      <span>xxx管理系统</span>
    </div>
    <div class="form-wrapper">
      <a-form ref="formRef" :model="form" :rules="rules">
        <a-form-item name="username">
          <a-input
            v-model:value="form.username"
            :placeholder="user.username"
            size="large"
          >
            <template #prefix>
              <user-outlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input
            v-model:value="form.password"
            :placeholder="user.password"
            size="large"
            @keypress.enter="handleLogin"
          >
            <template #prefix>
              <lock-outlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            block
            @click="handleLogin"
            size="large"
            :loading="loginBtnLoading"
            >登录</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { message as Message } from "ant-design-vue";
import { user } from "@/config";
import { urlToJson } from "@/utils/utils";

export default defineComponent({
  name: "login",
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    let formRef = ref();
    const form = reactive({
      username: "",
      password: "",
    });
    const rules = reactive({
      username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    });
    const loginBtnLoading = ref(false);
    const handleLogin = async () => {
      loginBtnLoading.value = true;
      formRef.value
        .validate()
        .then(() => {
          let { username, password } = form;
          if (username === user.username && password === user.password) {
            store.dispatch("user/login", form);
            const redirect = route.query?.redirect || "/";
            const toPath = decodeURIComponent(redirect);
            const urlJson = urlToJson(redirect);
            router.replace({
              path: toPath,
              query: urlJson,
            });
          } else {
            Message.error("密码错误");
          }
        })
        .catch(() => {
          console.log("catch");
        })
        .finally(() => {
          loginBtnLoading.value = false;
        });
    };
    return {
      form,
      rules,
      loginBtnLoading,
      handleLogin,
      user,
      formRef,
    };
  },
});
</script>

<style scoped lang="less">
.login-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border: 1px solid #418dbf;
  padding: 20px;
  border-radius: 10px;
  @media screen and (max-height: 300px) {
    top: 0;
    transform: translate(-50%, 0);
  }
  @media screen and (max-width: 300px) {
    width: 100%;
    padding: 10px;
  }
  .logo-wrapper {
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;
    .icon-wrapper {
      margin-right: 20px;
    }
  }
}
</style>
