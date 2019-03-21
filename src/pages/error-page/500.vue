<template>
    <div class="c-page-500 container">
        <img src="@/images/logo.png" alt="logo-bg" class="logo">
        <p class="error-content">500</p>
    </div>
</template>

<style lang="scss" scoped>
@import '~@/styles/tools';

.c-page-500 {
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
