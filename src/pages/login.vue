<template>
    <div class="flex flex-col md:flex-row h-screen page">
        <div class="w-full md:w-1/2 bg-cover bg-center flex items-center justify-center">
        </div>
        <div class="w-full md:w-1/2 flex flex-col items-center justify-center">
            <div class="p-6 rounded-lg shadow-md bg-white">
                <h2 class="text-2xl font-semibold mb-4 text-center">后台管理系统</h2>
                <n-form class="w-[350px]">
                    <n-form-item label="用户名">
                        <n-input type="text" placeholder="请输入用户名" />
                    </n-form-item>
                    <n-form-item label="密码">
                        <n-input
                            type="password"
                            show-password-on="mousedown"
                            placeholder="请输入密码"
                            :maxlength="8"
                        />
                    </n-form-item>
                    <n-form-item label="验证码">
                        <n-input
                            type="text"
                            placeholder="请输入验证码"
                        />
                        <img src="https://www.ccxict.cn/ump/captcha" alt="验证码" class="h-full ml-2">
                    </n-form-item>
                    <n-button type="info" round block>
                        登录
                    </n-button>
                </n-form>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
.page{
    background: url("../assets/img/login-bg.png") no-repeat center center;
    background-size: 100% 100%;
}
</style>