/* ISTANZA */
const app = Vue.createApp({
    data(){
        return{
          user: {
            name: 'Nome Utente',
            avatar: '_io'
          },
          contacts: [
            {
              id: 1,
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
                },
                {
                  id: 2,
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent'
                },
                {
                  id: 3,
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
                }
              ],
            },
            {
              id: 2,
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '20/03/2020 16:30:00',
                  message: 'Ciao come stai?',
                  status: 'sent'
                },
                {
                  id: 2,
                  date: '20/03/2020 16:30:55',
                  message: 'Bene grazie! Stasera ci vediamo?',
                  status: 'received'
                },
                {
                  id: 3,
                  date: '20/03/2020 16:35:00',
                  message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                  status: 'sent'
                }
              ],
            },
            {
              id: 3,
              name: 'Samuele',
              avatar: '_3',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '28/03/2020 10:10:40',
                  message: 'La Marianna va in campagna',
                  status: 'received'
                },
                {
                  id: 2,
                  date: '28/03/2020 10:20:10',
                  message: 'Sicuro di non aver sbagliato chat?',
                  status: 'sent'
                },
                {
                  id: 3,
                  date: '28/03/2020 16:15:22',
                  message: 'Ah scusa!',
                  status: 'received'
                }
              ],
            },
            {
              id: 4,
              name: 'Alessandro B.',
              avatar: '_4',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '10/01/2020 15:30:55',
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
                },
                {
                  id: 2,
                  date: '10/01/2020 15:50:00',
                  message: 'Si, ma preferirei andare al cinema',
                  status: 'received'
                }
              ],
            },
            {
              id: 5,
              name: 'Alessandro L.',
              avatar: '_5',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '10/01/2020 15:30:55',
                  message: 'Ricordati di chiamare la nonna',
                  status: 'sent'
                },
                {
                  id: 2,
                  date: '10/01/2020 15:50:00',
                  message: 'Va bene, stasera la sento',
                  status: 'received'
                }
              ],
            },
            {
              id: 6,
              name: 'Claudia',
              avatar: '_5',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '10/01/2020 15:30:55',
                  message: 'Ciao Claudia, hai novità?',
                  status: 'sent'
                },
                {
                  id: 2,
                  date: '10/01/2020 15:50:00',
                  message: 'Non ancora',
                  status: 'received'
                },
                {
                  id: 3,
                  date: '10/01/2020 15:51:00',
                  message: 'Nessuna nuova, buona nuova',
                  status: 'sent'
                }
              ],
            },
            {
              id: 7,
              name: 'Federico',
              avatar: '_7',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '10/01/2020 15:30:55',
                  message: 'Fai gli auguri a Martina che è il suo compleanno!',
                  status: 'sent'
                },
                {
                  id: 2,
                  date: '10/01/2020 15:50:00',
                  message: 'Grazie per avermelo ricordato, le scrivo subito!',
                  status: 'received'
                }
              ],
            },
            {
              id: 8,
              name: 'Davide',
              avatar: '_8',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '10/01/2020 15:30:55',
                  message: 'Ciao, andiamo a mangiare la pizza stasera?',
                  status: 'received'
                },
                {
                  id: 2,
                  date: '10/01/2020 15:50:00',
                  message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                  status: 'sent'
                },
                {
                  id: 3,
                  date: '10/01/2020 15:51:00',
                  message: 'OK!!',
                  status: 'received'
                }
              ],
            }
          ],
          currentId: 1,
          newText:'',
          searchText:'',
          dropdown:false,
          currentMess:[],
        }
        },
    

    computed:{

      /* FUNZIONE CHE TIENE TRACCIA DEL ID DEL CONTATTO SELEZIONATO */
      currentContact(){
        return this.contacts.find(contact => contact.id === this.currentId);
      },
     

      /* CENTRALIZZAZIONE CHAT DEL CONTATTO CORRENTE */
      currentChat(){
        return this.currentContact.messages
      },
 
        CurrentMessage(){
        return this.currentChat.find(message => message.id === this.currentMess);
      }, 
    

      /* ARRAY CHE FILTRA I CONTATTI IN BASE ALLE PAROLE CERCATE */
      filteredContacts(){
       const searchedText = this.searchText.toLowerCase()
        return this.contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(searchedText)
       })
      }
    },
    methods:{

      /* FUNZIONE CHE RENDERIZZA IL CONTATTO */
      getAvatar(contact){
        const avatar = contact.avatar
        return `img/avatar${avatar}.jpg`
      },

      /* FUNZIONE CHE MI RESTITUISCE L'ID DELLA CHAT */
      setCurrentId(id){
        this.currentId = id;
      
      },
      setCurrentMess(Messid){
        this.currentMess = Messid;
        
      },
       isDropdown(){
        return this.dropdown=!this.dropdown;
      }, 

      deleteMessage(){
        this.currentContact.messages = this.currentContact.messages.filter(message => message.id !== this.currentMess)

      },
     

    
      /* CENTRALIZZAZIONE DELLA CREAZIONE DELL'OGGETTO DA INSERIRE NEL ARRAY MESSAGGES */
      addMessage(message, status){
        const messageText= {
          id: new Date().getTime(),
          date: new Date().toLocaleString(),
          message,
          status
        }
        this.currentChat.push(messageText)
      },
    
      /* FUNZIONE CHE INSERISCE IL MESSAGGIO DELL'UTENTE */
      sendMess(){
      if(!this.newText) return  
        this.addMessage(this.newText, 'sent')
        this.newText=''

        /* TIMING FUNCTION CHE RISPONDE DOPO UN SECONDO DAL INVIO */
      setTimeout(this.cpuAnswer, 1000);
    },

    /* FUNZIONE CHE INSERISCE IL MESSAGGIO DELLA CPU */
      cpuAnswer(){
      this.addMessage('ok', 'received')
    },
   
  }
})

app.mount('#root');