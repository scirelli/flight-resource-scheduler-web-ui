<template>
    <header class="header-main">
        Header
        <nav role="menubar" aria-label="Main menu bar">
            <ul role="menu" aria-label="Main">
                <li role="none">
                    <route-link to="/calndar" role="menuitem">Calendar</route-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    module.exports = {
        name: 'scHeader'
    };
</script>

<style scoped>
</style>
