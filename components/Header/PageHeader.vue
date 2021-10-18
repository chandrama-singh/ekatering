<template>
    <header aria-label="page caption" class="flex flex-wrap justify-between px-6 pt-6 items-center">
        <div>
            <h1 id="page-caption" class="font-semibold text-lg">{{pageTitle}}</h1>
            <p class="text-sm">Manage all {{pageTitle}} from here.</p>
        </div>
        <div class="flex item-center gap-2">
            <slot name="action"></slot>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        pageTitle: {
            type: String,
            default: '',
            required: true,
		},
	
    },
}
</script>

<style>

</style>