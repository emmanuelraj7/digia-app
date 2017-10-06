import React from 'react';
import Table from './C2-Table';



class SignupForm extends React.Component {
  state = {
    //Generating 20 random participants
    participants: [{
     id: 1,
     name: 'Satoshi Nakamoto',
     email: 'satoshi7@gmail.com',
     phone: '0466949848'
    },
    {
     id: 2,
     name: 'Stella ron',
     email: 'stellas@gmail.com',
     phone: '0465940948'
    },
    {
     id: 3,
     name: 'Paul collingwood',
     email: 'pc71@gmail.com',
     phone: '0465940948'

    },
    {
     id: 4,
     name: 'Heikki Ruhannen',
     email: 'heikki17@gmail.com',
     phone: '0465949767'

    },
    {
     id: 5,
     name: 'Ari Hautala',
     email: 'ari17@gmail.com',
     phone: '0490949848'

    },
    {
     id: 6,
     name: 'Tomi Lehto',
     email: 'tomi1237@gmail.com',
     phone: '04659409238'

    },
    {
     id: 7,
     name: 'Venla Mielonen',
     email: 'venla17@gmail.com',
     phone: '0465941248'

    },
    {
     id: 8,
     name: 'Paul Kornelius',
     email: 'paul127@gmail.com',
     phone: '0460949848'

    },
    {
     id: 9,
     name: 'Jack Welsh',
     email: 'jacky7@gmail.com',
     phone: '0465949809'

    },
    {
     id: 10,
     name: 'Joel Osteen',
     email: 'joel17@gmail.com',
     phone: '0462149848'

    },
    {
     id: 11,
     name: 'Sanna lehto',
     email: 'sanna127@gmail.com',
     phone: '0465949028'

    },
    {
     id: 12,
     name: 'Topi Koskinen',
     email: 'topi17@gmail.com',
     phone: '0465990848'

    },
    {
     id: 13,
     name: 'Jannica Tiikanen',
     email: 'jannica7@gmail.com',
     phone: '0492949848'

    },
    {
     id: 14,
     name: 'Mikko Rikkinen',
     email: 'mikko127@gmail.com',
     phone: '0465789848'

    },
    {
     id: 15,
     name: 'Pertu Kröger',
     email: 'pertuu1@linkedin.com',
     phone: '0465109848'

    },
    {
     id: 16,
     name: 'Joel Raj',
     email: '787joel7@gmail.com',
     phone: '0460949848'

    },
    {
     id: 17,
     name: 'Linda Ross',
     email: 'linda127@gmail.com',
     phone: '0465949892'

    },
    {
     id: 18,
     name: 'Sophie Ross',
     email: 'ross7@gmail.com',
     phone: '0465949848'

    },
    {
     id: 19,
     name: 'David Warner',
     email: 'dave231@gmail.com',
     phone: '0465009848'

    },
    {
     id: 20,
     name: 'Ian buttler',
     email: 'Ian123@gmail.com',
     phone: '0465099848'

    }]
  };
  


  onSubmit = e => {
    e.preventDefault();
      const name = document.getElementById('fullname-input').value;
      const email = document.getElementById('email-input').value;
      const phoneno = document.getElementById('phone-number-input').value;

   //validate form  
   function validate () {

    var phonenovalidation = /^\d{10}$/;   

    if(name.length < 4) {
      alert('Please use a name with more than 5 characters');
    }
    if(email.indexOf("@") === -1) {
      alert('Requires valid email');
    }if(!phoneno.match(phonenovalidation)) {
      alert('Requires a valid phone number - 10 digits');
    }

    else {
    return 1;
    }

  }

    const err = validate();

    if(err===1) {
     //adding new participant
      var newparticipant = {
        id: this.state.participants.length + 1,
        name: name,
        email: email,
        phone: phoneno
      }
      this.setState({participants: this.state.participants.concat(newparticipant)});
      document.getElementById('fullname-input').value = '';
      document.getElementById('email-input').value = '';
      document.getElementById('phone-number-input').value = '';
    }
  };

  
  handleonDelete(x) {
    var participants = this.state.participants;
    for(var i = 0;i < participants.length; i++) {
      if(participants[i].id === x.id){
        //deleting selected participant
        participants.splice(i, 1);
      }
    }
    this.setState({participants: participants});
  }

  
    

  render() {
     
     return (
       <div className="wrapper"> 
       <div className="inner-wrapper"><h1 className="heading">List of Participants</h1></div> 
       <div id="inputform">
       <form className="form">    
       <input type="text" size="35" id="fullname-input" placeholder="Full Name" ref="text"></input>
       <input type="text" size="25" id="email-input" placeholder="E-mail address" ref="text"></input>
       <input type="text" size="25" id="phone-number-input" placeholder="Phone number" ref="text"></input>
       <button id="add-new" onClick={e => this.onSubmit(e)}>Add new</button>
       </form>

       
       </div>

       <Table 
        data={this.state.participants} 
        tableheaders={[
          {
           name: "Name ￬"
          },
          {
           name: "Email"
          },
          {
           name: "Phone No"
          },
          {
           name: ""
          },
          {
           name: ""
          }
        ]}  
        deleterow={this.handleonDelete.bind(this)}
        />


        </div>

     


     );
  }
}

export default SignupForm;


      

