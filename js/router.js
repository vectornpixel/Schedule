//This will tell Ember.js to detect when the application's URL matches '/' and to render the schedules template.
Appointment.Router.map(function(){
    this.resource('appointment',{path:'/'});
    
});

Appointment.AppointmentRoute = Ember.Route.extend({
   model: function(){
       return this.store.find('schedule');
   } 
});