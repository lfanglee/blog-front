<template>
    <div class="c-page-404 container">
        <img src="@/images/logo.png" alt="logo-bg" class="logo">
        <p class="error-content">404</p>
    </div>
</template>

<style lang="scss" scoped>
@import '~@/styles/tools';

.c-page-404 {
    text-align: center;
    img {
        width: 24rem;
    }
    .error-content {
        font-size: 5rem;
        font-weight: 700;
        color: $black;
    }
}
</style>
