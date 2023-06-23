# Boolzapp #

--

- Replico la grafica partendo dall'analisi a blocchettoni, e strutturando il layout avvalendomi del uso di *bootstrap*.
- Rendo dimanica la lista dei contatti utilizzando il **v-for**.
- Creo la function *getAvatar* che renderizza l'immagine del contatto.
- Inserisco un event handling con la sintassi *@click* al singolo contatto creato con il *v-for*.
    - Creo la function *setCurrentId* che come paramatro avrà l'id del contatto clickato, e lo associo alla variabile d'appoggio *currentId*.
-  Creo la function *currentContact* e utilizzando il metodo **find** tengo traccia del contatto con l'id corrente.
- Centralizzo la chat corrente con la computed *currentChat*.
- Utlizzando il **v-for** genero i messaggi nella chat del contatto selezionato.
    - Creo una classe dinamica che modifichi lo stile del messaggio in base allo *status*.
    - Usando la *'moustache sintax {{}}'* inserisco il testo del messaggio.
- Con il **v-model** associo la variabile *newText*
all'input text.
- Uso un event handling *@keyup.enter* all'interno dell'input text e lo associo alla function *sendMess*.
    - Creo la function *sendMess*, che generi l'oggetto del messaggio con il testo inserito nella variabile *newText*.
    - Creo la function *cpuAnswer* che generi l'oggetto del messaggio con testo predefinito.
    - Creo la timing function *setTimeout* all'interno di *sendMess* che avrà come callback function: *cpuAnswer*.
    - Centralizzo la creazione dell'oggetto nella function **addMessage* che avrà come parametri il testo del messagio e lo status.
- All'interno dell'input text della search section inserisco un v-model che collego alla variabile d'appoggio *searchText*.
- Creo la function *filteredContacts*, usando il metodo **filter** genero un nuovo array a partire dall'array contacts che filtri i contatti in base al testo di *searchText*.
    - faccio girare il **v-for** della lista contatti su *filteredContacts*.

