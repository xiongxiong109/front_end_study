module.exports = {
	Layer(resolve) { require(['./pages/layer'], resolve) },
	Nav(resolve) { require(['./pages/nav'], resolve) },
	Async(resolve) { require(['./pages/async'], resolve) },
	AsyncComponent(resolve) { require(['./pages/async_component'], resolve) },
	MutationObs(resolve) { require(['./pages/mutation'], resolve) }
	// D3Trans(resolve) { require(['./pages/d3_trans'], resolve) },
	// CirPro(resolve) { require(['./pages/cir_pro'], resolve) }
}