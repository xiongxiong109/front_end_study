module.exports = {
	Layer(resolve) { require(['./pages/layer'], resolve) },
	Nav(resolve) { require(['./pages/nav'], resolve) },
	RadCircle(resolve) { require(['./pages/rad_circle'], resolve) },
	DdDt(resolve) { require(['./pages/dd_dt'], resolve) },
	D3Trans(resolve) { require(['./pages/d3_trans'], resolve) },
	CirPro(resolve) { require(['./pages/cir_pro'], resolve) }
}