export default defineNuxtRouteMiddleware((to, from) => {
  console.log('middleware global to : {}, from : {}', to, from);
});
