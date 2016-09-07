"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./components/heroes.component');
var dashboard_1 = require('./components/dashboard');
var hero_detail_component_1 = require('./components/hero-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_1.default
    },
    {
        path: 'heroes',
        component: heroes_component_1.default
    },
    {
        path: 'details/:id',
        component: hero_detail_component_1.default
    }
];
var routing = router_1.RouterModule.forRoot(appRoutes);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routing;
//# sourceMappingURL=routing.js.map