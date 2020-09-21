Nova.booting((Vue) => {
    const components = name => (_.find(Nova.config.resources, resource => resource.uriKey === name).components || {}),
        render = (context, component) => component ? context._c(component, context.data, context.children) : context._c('div'),
        comp = (name) => ({
            functional: true,
            render: (h, context) => render(context, components(context.props.resourceName)[name]),
        })

    Vue.component('custom-detail-toolbar', comp('detail-toolbar'))
    Vue.component('custom-detail-header', comp('detail-header'))
    Vue.component('custom-index-toolbar', comp('index-toolbar'))
    Vue.component('custom-index-header', comp('index-header'))

    Vue.component('custom-attach-header', comp('attach-header'))
    Vue.component('custom-create-header', comp('create-header'))
    Vue.component('custom-dashboard-header', comp('dashboard-header'))
    Vue.component('custom-lens-header', comp('lens-header'))
    Vue.component('custom-update-header', comp('update-header'))
    Vue.component('custom-update-attached-header', comp('update-attached-header'))
})
