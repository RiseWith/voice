<script>

    var messages = ['🔊 Hey', '🔊 Hi, there!', '🔊 Hi!', '🔊 Hello'];

    if(annyang){
        console.log("Annyang is working!");

        var commands = {
            'Dashboard' : dashboard,
            'Launchpad' : launchpad,
            'Conversations' : conversations,
            'Calendars' : calendars,
            'Contacts' : contacts,
            'Opportunities' : opportunitites,
            'Payments' : payments,
            'Marketing' : marketing,
            'Automation' : automation,
            'Sites' : sites,
            'Reputation' : reputation,
            'Reporting' : reporting,
            'Social Planner' : socialPlanner,
            'Settings' : settings

        }

        function hello(){
            var randomIndex = Math.round(Math.random() * messages.length);
            console.log(`%c ${messages[randomIndex]}`,'color: green; font-weight:bold;');
        }

        function myname(){
            console.log("My name is Ann. Ann Yang.");
        }
        
        function launchpad(){
            location.href = ‘https://app.risewith.io/v2/location/iZxnTlCs7vSFaHDUlFUo/launchpad’;
      }
        
        function dashboard(){
            location.href = ‘https://app.risewith.io/v2/location/iZxnTlCs7vSFaHDUlFUo/dashboard’;
      }
        
        function conversations(){
            location.href = ‘https://app.risewith.io/v2/location/iZxnTlCs7vSFaHDUlFUo/conversations/conversations/none’;
      }
        
        function calendars(){
            location.href = ‘https://app.risewith.io/v2/location/iZxnTlCs7vSFaHDUlFUo/calendars/view?user_id=ucru51cFJoecmFKm91yN&location_id=iZxnTlCs7vSFaHDUlFUo&startDate=2023-04-23’;
      }
        
        function contacts(){
            location.href = ‘https://app.risewith.io/v2/location/iZxnTlCs7vSFaHDUlFUo/contacts/smart_list/All’;
      }
        
        function opportunitites(){
            location.href = ‘https://app.risewith.io/v2/location/iZxnTlCs7vSFaHDUlFUo/opportunities/list’;
      }
        
        function payments(){
            location.href = ‘https://app.risewith.io/v2/location/iZxnTlCs7vSFaHDUlFUo/payments/invoices’;
      }
        
        function marketing(){
            location.href = ‘https://app.risewith.io/v2/location/iZxnTlCs7vSFaHDUlFUo/marketing/social-planner/’;
      }
        
        function socialPlanner(){
            location.href = ‘https://app.risewith.io/v2/location/iZxnTlCs7vSFaHDUlFUo/marketing/social-planner/’;
      }
        
        function automation(){
            location.href = ‘https://app.risewith.io/v2/location/iZxnTlCs7vSFaHDUlFUo/automation/workflows’;
      }
        
        function sites(){
            location.href = ‘https://app.risewith.io/v2/location/iZxnTlCs7vSFaHDUlFUo/funnels-websites/funnels’;
      }
        
        function reputation(){
            location.href = ‘https://app.risewith.io/v2/location/iZxnTlCs7vSFaHDUlFUo/reputation/overview’;
      }
        
        function reporting(){
            location.href = ‘https://app.risewith.io/v2/location/iZxnTlCs7vSFaHDUlFUo/reporting/google’;
      }
        
        function settings(){
            location.href = ‘https://app.risewith.io/v2/location/iZxnTlCs7vSFaHDUlFUo/settings/company’;
      }

        // Add Commands
        annyang.addCommands(commands);

        // Start listening
        annyang.start();

    }

</script>
