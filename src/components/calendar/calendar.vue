<template>
    <section>
        <div id="calendar"></div>
    </section>
</template>

<script>
    import 'fullcalendar/dist/fullcalendar.min.css';
    import 'fullcalendar/dist/fullcalendar.print.min.css';
    require('moment');
    require('fullcalendar');
    
    export default {
        name: 'scCalendar',
        data: function data() {
            return {};
        },
        mounted: function mounted() {
            debugger;
            $('#calendar').fullCalendar({
            });
        },
        components: {
        }
    };
</script>

<style scoped>
</style>

