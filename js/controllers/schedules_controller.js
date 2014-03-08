Appointment.AppointmentController = Ember.ArrayController.extend({
    actions:{
        createSchedule: function(){
            var date = this.get('newDate');
            if(!date.trim()){return;}
            
            var time = this.get('newTime');
            if(!time.trim()){return;}
            
            var schedule = this.store.createRecord('schedule',{
                date: date,
                time: time
            });
            
            this.set('newDate','');
            this.set('newTime','');
            
            schedule.save();
        }
    }
    
});