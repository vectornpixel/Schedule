Appointment.Schedule = DS.Model.extend({
   date: DS.attr('string'),
   time: DS.attr('string')
    
});

Appointment.Schedule.FIXTURES = [
    {
        id: 1,
        date: '3/3/14',
        time: '12:00PM'
     
    }
    
];